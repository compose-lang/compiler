import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import BooleanType from "../type/BooleanType.ts";
import { assert } from "../../deps.ts";

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
        assert(leftType == BooleanType.instance);
        const rightType = this.right.check(context);
        assert(rightType == BooleanType.instance);
        return BooleanType.instance;
    }

    declare(context: Context, module: WasmModule): void {
        this.left.declare(context, module);
        this.right.declare(context, module);
    }

}
