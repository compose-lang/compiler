import Context from "../context/Context";
import WasmModule from "../module/wasm/WasmModule";
import IType from "../type/IType";
import ExpressionBase from "./ExpressionBase";
import IExpression from "./IExpression";
import UnaryOperator from "./UnaryOperator";
import FunctionBody from "../module/wasm/FunctionBody";
import CompilerFlags from "../compiler/CompilerFlags";

export default class UnaryExpression extends ExpressionBase {

    expression: IExpression;
    operator: UnaryOperator;

    constructor(expression: IExpression, operator: UnaryOperator) {
        super();
        this.expression = expression;
        this.operator = operator;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        return type.checkUnaryOperator(context, this.operator);
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IType {
        const type = this.expression.check(context);
        return type.compileUnaryOperator(context, module, flags, body, this.expression, this.operator);
    }

}
