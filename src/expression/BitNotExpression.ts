import ExpressionBase from "./ExpressionBase";
import IExpression from "./IExpression";
import assert from "assert";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import IntegerType from "../type/IntegerType";

export default class BitNotExpression extends ExpressionBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        assert.ok(type instanceof IntegerType);
        return type;
    }

    isConst(context: Context): boolean {
        return this.expression.isConst(context);
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

}
