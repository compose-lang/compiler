import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import IValueType from "../type/IValueType.ts";
import { assertTrue } from "../../deps.ts";

export default class CastExpression extends ExpressionBase {

    type: IValueType;
    expression: IExpression;

    constructor(type: IValueType, expression: IExpression) {
        super();
        this.type = type;
        this.expression = expression;
    }


    check(context: Context): IType {
        const actual = this.expression.check(context);
        assertTrue(this.type.isAssignableFrom(context, actual));
        return this.type;
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
