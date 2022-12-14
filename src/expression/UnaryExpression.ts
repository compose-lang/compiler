import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import ExpressionBase from "./ExpressionBase";
import IExpression from "./IExpression";
import UnaryOperator from "./UnaryOperator";
import FunctionBody from "../module/FunctionBody";

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

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const type = this.expression.check(context);
        return type.compileUnaryOperator(context, module, body, this.expression, this.operator);
    }

}
