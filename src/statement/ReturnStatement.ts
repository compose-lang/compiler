import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionCode from "../module/FunctionCode";
import OpCode from "../compiler/OpCode";

export default class ReturnStatement extends StatementBase {

    expression: IExpression | null;

    constructor(expression: IExpression | null) {
        super();
        this.expression = expression;
    }

    declare(context: Context, module: WasmModule): void {
        if(this.expression)
            this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionCode): void {
        if(this.expression)
            this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, body: FunctionCode): void {
        if(this.expression)
            this.expression.compile(context, module, body);
        body.addOpCode(OpCode.RETURN);
    }

}
