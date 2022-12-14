import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";

export default class ReturnStatement extends StatementBase {

    expression: IExpression | null;

    constructor(expression: IExpression | null) {
        super();
        this.expression = expression;
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }
}
