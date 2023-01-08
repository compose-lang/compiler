import StatementBase from "./StatementBase";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Context from "../context/Context";
import IExpression from "../expression/IExpression";
import UnaryOperator from "../expression/UnaryOperator";
import * as assert from "assert";

export default class UnaryStatement extends StatementBase {

    expression: IExpression;
    operator: UnaryOperator;

    constructor(expression: IExpression, operator: UnaryOperator) {
        super();
        this.expression = expression;
        this.operator = operator;
    }


    check(context: Context): IType {
        const type = this.expression.check(context);
        type.checkUnaryOperator(context, this.operator);
        return null;
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assert.ok(false); // TODO
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        assert.ok(false); // TODO
    }

}
