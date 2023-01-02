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
        assert.ok(false); // TODO
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assert.ok(false); // TODO
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        assert.ok(false); // TODO
    }


}
