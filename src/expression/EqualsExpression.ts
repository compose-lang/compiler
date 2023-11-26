import ExpressionBase from "./ExpressionBase";
import IExpression from "./IExpression";
import Comparator from "./Comparator";
import Context from "../context/Context";
import IType from "../type/IType";
import Module from "../module/WasmModule";
import assert from "assert";

export default class EqualsExpression extends ExpressionBase {

    left: IExpression;
    right: IExpression;
    reverse: boolean;

    constructor(left: IExpression, reverse: boolean, right: IExpression) {
        super();
        this.left = left;
        this.right = right;
        this.reverse = reverse;
    }

    check(context: Context): IType {
        const leftType = this.left.check(context);
        const rightType = this.right.check(context);
        return leftType.checkEquals(context, rightType);
    }

    declare(context: Context, module: Module): void {
        this.left.declare(context, module);
        this.right.declare(context, module);
    }

}
