import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import WasmModule from "../module/wasm/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/wasm/FunctionBody";
import OpCode from "../compiler/OpCode";
import IType from "../type/IType";
import VoidType from "../type/VoidType";
import CompilerFlags from "../compiler/CompilerFlags";

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

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IType {
        let type: IType = null;
        if(this.expression)
            type = this.expression.compile(context, module, flags, body);
        body.addOpCode(OpCode.RETURN);
        return type;
    }


}
