import ExpressionBase from "./ExpressionBase";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import BinaryOperator from "./BinaryOperator";
import IExpression from "./IExpression";
import * as assert from "assert";
import FunctionBody from "../module/FunctionBody";
import {BINARY_CONSTIFIERS} from "../compiler/Constifiers";

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
                assert.ok(false, "Not implemented: " + BinaryOperator[this.operator]);
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
        assert.ok(constifier);
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

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const leftType = this.left.compile(context, module, body);
        const rightType = this.right.compile(context, module, body);
        switch(this.operator) {
            case BinaryOperator.PLUS:
                return leftType.compileAdd(context, module, body, rightType,true);
            case BinaryOperator.LSHIFT:
            case BinaryOperator.RSHIFT:
            case BinaryOperator.BIT_AND:
            case BinaryOperator.BIT_OR:
            case BinaryOperator.BIT_XOR:
                return leftType.compileBinaryBitsOperator(context, module, body, rightType, this.operator);
            default:
                assert.ok(false, "Not implemented: " + BinaryOperator[this.operator]);
        }
    }
}
