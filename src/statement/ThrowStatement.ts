import StatementBase from "./StatementBase.ts";
import IExpression from "../expression/IExpression.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import ErrorType from "../type/ErrorType.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import {assert} from "../../deps.ts";
import VoidType from "../type/VoidType.ts";

export default class ThrowStatement extends StatementBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        assert(ErrorType.instance.isAssignableFrom(context, type));
        return VoidType.instance;
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assert(false); // TODO
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        assert(false); // TODO
    }

}
