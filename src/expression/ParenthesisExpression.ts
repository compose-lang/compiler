import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";

export default class ParenthesisExpression extends ExpressionBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }


    check(context: Context): IType {
        return this.expression.check(context);
    }

    isConst(context: Context): boolean {
        return this.expression.isConst(context);
    }

    constify(context: Context): IExpression {
        return this.expression.constify(context);
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        return this.expression.compile(context, module, flags, body);
    }

}
