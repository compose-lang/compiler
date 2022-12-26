import ExpressionBase from "./ExpressionBase";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import Operator from "./Operator";
import IExpression from "./IExpression";
import * as assert from "assert";
import FunctionBody from "../module/FunctionBody";

export default class BinaryExpression extends ExpressionBase {

    left: IExpression;
    right: IExpression;
    operator: Operator;

    constructor(left: IExpression, op: Operator, right: IExpression) {
        super();
        this.left = left;
        this.right = right;
        this.operator = op;
    }

    check(context: Context): IType {
        const leftType = this.left.check(context);
        const rightType = this.right.check(context);
        switch(this.operator) {
            case Operator.PLUS:
                return leftType.checkAdd(context, rightType, true);
            case Operator.MINUS:
                return leftType.checkSubtract(context, rightType);
            default:
                assert.ok(false);
        }
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
        return leftType.compileAdd(context, rightType, module, body, true);
    }
}