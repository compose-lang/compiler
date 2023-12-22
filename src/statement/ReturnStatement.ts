import StatementBase from "./StatementBase.ts";
import IExpression from "../expression/IExpression.ts";
import WasmModule from "../module/WasmModule.ts";
import Context from "../context/Context.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import VoidType from "../type/VoidType.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";

export default class ReturnStatement extends StatementBase {

    expression: IExpression | null;

    constructor(expression: IExpression | null) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        if(this.expression)
            return this.expression.check(context);
        else
            return VoidType.instance;
    }

    isConst(context: Context): boolean {
        if(this.expression)
            return this.expression.isConst(context);
        else
            return false; // void is not const
    }

    declare(context: Context, module: WasmModule): void {
        if(this.expression)
            this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        if(this.expression)
            this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        if(this.expression) {
            const result = this.expression.compile(context, module, flags, body);
            return {refs: [ module.return(result.ref) ], type: result.type};
        } else
            return {refs: [ module.return() ], type: VoidType.instance};
    }


}
