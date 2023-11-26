import ExpressionBase from "./ExpressionBase";
import assert from "assert";
import WasmModule from "../module/wasm/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import IExpression from "./IExpression";
import IValueType from "../type/IValueType";

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
        assert.ok(this.type.isAssignableFrom(context, actual));
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
