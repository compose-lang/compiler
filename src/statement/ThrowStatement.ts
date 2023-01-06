import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Context from "../context/Context";
import * as assert from "assert";
import ErrorType from "../type/ErrorType";

export default class ThrowStatement extends StatementBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        assert.ok(ErrorType.instance.isAssignableFrom(context, type));
        return null;
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        assert.ok(false); // TODO
    }

    declare(context: Context, module: WasmModule): void {
        assert.ok(false); // TODO
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assert.ok(false); // TODO
    }
}
