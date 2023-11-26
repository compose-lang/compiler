import ExpressionBase from "./ExpressionBase";
import IExpression from "./IExpression";
import Context from "../context/Context";
import IType from "../type/IType";
import assert from "assert";
import BooleanType from "../type/BooleanType";
import WasmModule from "../module/wasm/WasmModule";

export default class LogicalNotExpression extends ExpressionBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        assert.ok(type == BooleanType.instance, "Not a boolean at " + this.fragment.toString());
        return BooleanType.instance;
    }

    declare(context: Context, module: WasmModule): void {
        assert.ok(false); // TODO
    }

}
