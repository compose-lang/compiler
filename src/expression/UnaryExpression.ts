import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import ExpressionBase from "./ExpressionBase.ts";
import IExpression from "./IExpression.ts";
import UnaryOperator from "./UnaryOperator.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";

export default class UnaryExpression extends ExpressionBase {

    expression: IExpression;
    operator: UnaryOperator;

    constructor(expression: IExpression, operator: UnaryOperator) {
        super();
        this.expression = expression;
        this.operator = operator;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        return type.checkUnaryOperator(context, this.operator);
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const type = this.expression.check(context);
        return type.compileUnaryOperator(context, module, flags, body, this.expression, this.operator);
    }

}
