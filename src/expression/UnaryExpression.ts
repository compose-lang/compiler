import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import ExpressionBase from "./ExpressionBase";
import IExpression from "./IExpression";
import UnaryOperator from "./UnaryOperator";

export default class UnaryExpression extends ExpressionBase {

    expression: IExpression;
    operator: UnaryOperator;

    constructor(expression: IExpression, operator: UnaryOperator) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        return type.checkUnaryOperator(context, this.operator);
    }

    declare(context: Context, module: WasmModule): void {
        throw new Error("Method not implemented.");
    }

}
