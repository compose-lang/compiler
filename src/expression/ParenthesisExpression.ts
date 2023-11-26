import ExpressionBase from "./ExpressionBase";
import assert from "assert";
import Module from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import IExpression from "./IExpression";

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

    declare(context: Context, module: Module): void {
        this.expression.declare(context, module);
    }

}
