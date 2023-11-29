import ExpressionBase from "./ExpressionBase";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import * as assert from "assert";
import Context from "../context/Context";
import IExpression from "./IExpression";
import BooleanType from "../type/BooleanType";

export default abstract class LogicalExpression extends ExpressionBase {

    left: IExpression;
    right: IExpression;

    constructor(left: IExpression, right: IExpression) {
        super();
        this.left = left;
        this.right = right;
    }

    check(context: Context): IType {
        const leftType = this.left.check(context);
        assert.ok(leftType == BooleanType.instance);
        const rightType = this.right.check(context);
        assert.ok(rightType == BooleanType.instance);
        return BooleanType.instance;
    }

    declare(context: Context, module: WasmModule): void {
        this.left.declare(context, module);
        this.right.declare(context, module);
    }

}
