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
        this.compileBlock(context, module, flags, body, typeMap, block, blocks)
        const result = typeMap.inferType(context);
        return result == VoidType.instance ? null : result;
    }

    private compileBlock(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, typeMap: TypeMap, block: IfBlock, remaining: IfBlock[]) {
        /*if(block.condition) {
            block.condition.compile(context, module, flags);
            body.addOpCode(OpCode.IF, [ 0x40 ]); // 0x40 == void
            const type = block.statements.compile(context, module, flags, body) || null;
            if(type && type!=VoidType.instance)
                typeMap.add(type);
            if (remaining.length) {
                body.addOpCode(OpCode.ELSE, null);
                const block = remaining.splice(0, 1)[0];
                this.compileBlock(context, module, flags, body, typeMap, block, remaining);
            }
            body.addOpCode(OpCode.END);
        } else { // final else
            const type = block.statements.compile(context, module, flags, body) || null;
            if(type && type!=VoidType.instance)
                typeMap.add(type);
        }*/
    }


}
