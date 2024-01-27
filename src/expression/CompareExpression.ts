import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import Comparator from "./Comparator.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import UnaryOperator from "./UnaryOperator.ts";

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

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.left.rehearse(context, module, body);
        this.right.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const left = this.left.compile(context, module, flags, body);
        const right = this.right.compile(context, module, flags, body);
        return left.type.compileCompare(context, module, flags, body, left, right, this.comparator);
    }

}
