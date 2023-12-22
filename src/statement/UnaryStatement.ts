import StatementBase from "./StatementBase.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "../expression/IExpression.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import VoidType from "../type/VoidType.ts";

export default class UnaryStatement extends StatementBase {

    expression: IExpression;
    operator: UnaryOperator;

    constructor(expression: IExpression, operator: UnaryOperator) {
        super();
        this.expression = expression;
        this.operator = operator;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        type.checkUnaryOperator(context, this.operator);
        return VoidType.instance;
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        const type = this.expression.check(context);
        const result = type.compileUnaryOperator(context, module, flags, body, this.expression, this.operator);
        return { refs: [ module.drop(result.ref) ], type: VoidType.instance };
    }

}
