import ExpressionBase from "./ExpressionBase.ts";
import IExpression from "./IExpression.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IntegerType from "../type/IntegerType.ts";
import FunctionBody from "../module/FunctionBody.ts";
import UnaryOperator from "./UnaryOperator.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import { assertTrue } from "../../deps.ts";

export default class BitNotExpression extends ExpressionBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        assertTrue(type instanceof IntegerType);
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

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const type = this.expression.check(context);
        return type.compileUnaryOperator(context, module, flags, body, this.expression, UnaryOperator.BIT_NOT);
    }

}
