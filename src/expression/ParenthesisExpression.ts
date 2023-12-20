import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";

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

}
