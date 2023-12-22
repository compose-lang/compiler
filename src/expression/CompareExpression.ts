import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import Comparator from "./Comparator.ts";

export default class CompareExpression extends ExpressionBase {

    left: IExpression;
    right: IExpression;
    comparator: Comparator;

    constructor(left: IExpression, cmp: Comparator, right: IExpression) {
        super();
        this.left = left;
        this.right = right;
        this.comparator = cmp;
    }

    check(context: Context): IType {
        const leftType = this.left.check(context);
        const rightType = this.right.check(context);
        return leftType.checkCompare(context, rightType);
    }

    declare(context: Context, module: WasmModule): void {
        this.left.declare(context, module);
        this.right.declare(context, module);
    }

}
