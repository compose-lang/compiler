import StatementBase from "./StatementBase";
import StatementList from "./StatementList";
import IExpression from "../expression/IExpression";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import * as assert from "assert";
import Context from "../context/Context";
import TypeMap from "../type/TypeMap";
import BooleanType from "../type/BooleanType";
import VoidType from "../type/VoidType";
import OpCode from "../compiler/OpCode";
import CompilerFlags from "../compiler/CompilerFlags";
import IResults from "./IResults";

export interface IfBlock {
    condition: IExpression;
    statements: StatementList;
}

export default class IfStatement extends StatementBase {

    blocks: IfBlock[] = [];

    constructor(blocks: IfBlock[]) {
        super();
        this.blocks = blocks;
    }

    check(context: Context): IType {
        const typeMap = new TypeMap();
        let typeCount = 0;
        this.blocks.forEach(block => {
            const type = IfStatement.checkBlock(context, block);
            if(type && type!=VoidType.instance) {
                typeMap.add(type);
                typeCount ++;
            }
        }, this);
        assert.ok(typeCount==0 || typeCount==this.blocks.length)
        const result = typeMap.inferType(context);
        return result == VoidType.instance ? null : result;
    }

    private static checkBlock(context: Context, block: IfBlock): IType {
        if(block.condition) {
            const type = block.condition.check(context);
            assert.ok(type == BooleanType.instance);
        }
        return block.statements.check(context.newChildContext(), null);
    }

    declare(context: Context, module: WasmModule): void {
        this.blocks.forEach(block => {
            if(block.condition)
                block.condition.declare(context, module);
            block.statements.declare(context, module);
        })
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.blocks.forEach(block => {
            if(block.condition)
                block.condition.rehearse(context, module, body);
            block.statements.rehearse(context, module, body);
        })
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        const typeMap = new TypeMap();
        const blocks = Array.from(this.blocks) as IfBlock[];
        const block = blocks.splice(0, 1)[0];
        const results = this.compileBlock(context, module, flags, body, typeMap, block, blocks)
        const type = typeMap.inferType(context);
        return { refs: results.refs, type };
    }

    private compileBlock(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, typeMap: TypeMap, block: IfBlock, remaining: IfBlock[]): IResults {
        if(block.condition) {
            const condition = block.condition.compile(context, module, flags, body);
            const ifTrue = block.statements.compile(context, module, flags, body) || null;
            let ifFalse: IResults = { refs: null, type: VoidType.instance };
            if(remaining.length) {
                const block = remaining.splice(0, 1)[0];
                ifFalse = this.compileBlock(context, module, flags, body, typeMap, block, remaining);
            }
            const ref = module.if(condition.ref,
                module.block(null, ifTrue.refs, ifTrue.type.asType()),
                ifFalse.refs ? module.block(null, ifTrue.refs, ifTrue.type.asType()) : null
                )
            return { refs: [ref], type: typeMap.inferType(context) };
        } else { // final else
            const results = block.statements.compile(context, module, flags, body) || null;
            if(results && results.type && results.type!=VoidType.instance)
                typeMap.add(results.type);
            const ref = module.block(null, results.refs );
            return { refs: [ ref ], type: results.type };
        }
    }


}
