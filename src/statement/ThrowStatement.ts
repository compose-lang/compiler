import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import Module from "../module/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import IType from "../type/IType";
import Context from "../context/Context";
import * as assert from "assert";
import ErrorType from "../type/ErrorType";
import CompilerFlags from "../compiler/CompilerFlags";

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

    declare(context: Context, module: Module): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: Module, body: FunctionBody): void {
        assert.ok(false); // TODO
    }

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType {
        assert.ok(false); // TODO
    }

}
