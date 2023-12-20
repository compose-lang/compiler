import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import BinaryOperator from "./BinaryOperator.ts";
import IExpression from "./IExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import {BINARY_CONSTIFIERS} from "../compiler/Constifiers.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";

export default class BinaryExpression extends ExpressionBase {

    left: IExpression;
    right: IExpression;
    operator: BinaryOperator;

    constructor(left: IExpression, op: BinaryOperator, right: IExpression) {
        super();
        this.left = left;
        this.right = right;
        this.operator = op;
    }

    check(context: Context): IType {
        const leftType = this.left.check(context);
        const rightType = this.right.check(context);
        switch(this.operator) {
            case BinaryOperator.PLUS:
                return leftType.checkAdd(context, rightType, true);
            case BinaryOperator.MINUS:
                return leftType.checkSubtract(context, rightType);
            case BinaryOperator.MULTIPLY:
                return leftType.checkMultiply(context, rightType, true);
            case BinaryOperator.LSHIFT:
            case BinaryOperator.RSHIFT:
            case BinaryOperator.URSHIFT:
            case BinaryOperator.BIT_AND:
            case BinaryOperator.BIT_OR:
            case BinaryOperator.BIT_XOR:
                return leftType.checkBinaryBitsOperator(context, this.operator, rightType);
            default:
                assert(false, "Not implemented: " + BinaryOperator[this.operator]);
        }
    }

    isConst(context: Context): boolean {
        return this.left.isConst(context) && this.right.isConst(context);
    }

    constify(context: Context): IExpression {
        const left = this.left.constify(context);
        const right = this.right.constify(context);
        const leftType = left.check(context);
        const rightType = right.check(context);
        const constifier = BINARY_CONSTIFIERS.getConstifier(leftType, rightType, this.operator);
        assert(constifier);
        return constifier(left, right);
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
        const leftResult = this.left.compile(context, module, flags, body);
        const rightResult = this.right.compile(context, module, flags, body);
        switch(this.operator) {
            case BinaryOperator.PLUS:
                return leftResult.type.compileAdd(context, module, flags, leftResult, rightResult, true);
            case BinaryOperator.LSHIFT:
            case BinaryOperator.RSHIFT:
            case BinaryOperator.BIT_AND:
            case BinaryOperator.BIT_OR:
            case BinaryOperator.BIT_XOR:
                return leftResult.type.compileBinaryBitsOperator(context, module, flags, leftResult, rightResult, this.operator);
            default:
                assert(false, "Not implemented: " + BinaryOperator[this.operator]);
        }
    }
}
