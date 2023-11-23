import ExpressionBase from "./ExpressionBase";
import IExpression from "./IExpression";
import assert from "assert";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import IntegerType from "../type/IntegerType";
import FunctionBody from "../module/FunctionBody";
import UnaryOperator from "./UnaryOperator";
import CompilerFlags from "../compiler/CompilerFlags";

export default class BitNotExpression extends ExpressionBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        assert.ok(type instanceof IntegerType);
        return type;
    }

    isConst(context: Context): boolean {
        return this.expression.isConst(context);
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IType {
        const type = this.expression.check(context);
        return type.compileUnaryOperator(context, module, flags, body, this.expression, UnaryOperator.BIT_NOT);
    }

}
