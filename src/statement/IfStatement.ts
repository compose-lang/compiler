import StatementBase from "./StatementBase.ts";
import StatementList from "./StatementList.ts";
import IExpression from "../expression/IExpression.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import TypeMap from "../type/TypeMap.ts";
import BooleanType from "../type/BooleanType.ts";
import VoidType from "../type/VoidType.ts";
import OpCode from "../compiler/OpCode.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import {assert} from "../../deps.ts";

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
        assert(typeCount==0 || typeCount==this.blocks.length)
        const result = typeMap.inferType(context);
        return result == VoidType.instance ? null : result;
    }

    private static checkBlock(context: Context, block: IfBlock): IType {
        if(block.condition) {
            const type = block.condition.check(context);
            assert(type == BooleanType.instance);
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
                module.block(null, ifTrue.refs!, ifTrue.type.asType()),
                ifFalse.refs ? module.block(null, ifFalse.refs!, ifFalse.type.asType()) : undefined
                )
            return { refs: [ref], type: typeMap.inferType(context) };
        } else { // final else
            const results = block.statements.compile(context, module, flags, body) || null;
            if(results && results.type && results.type!=VoidType.instance)
                typeMap.add(results.type);
            const ref = module.block(null, results.refs! );
            return { refs: [ ref ], type: results.type };
        }
    }


}
