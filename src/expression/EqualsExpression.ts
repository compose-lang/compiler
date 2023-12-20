import ExpressionBase from "./ExpressionBase.ts";
import IExpression from "./IExpression.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import WasmModule from "../module/WasmModule.ts";

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

    declare(context: Context, module: WasmModule): void {
        this.left.declare(context, module);
        this.right.declare(context, module);
    }

}
