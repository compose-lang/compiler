import CodeFragment from "../builder/CodeFragment";
import IExpression from "./IExpression";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionCode from "../module/FunctionCode";

export default abstract class ExpressionBase extends CodeFragment implements IExpression {
    abstract declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionCode): void {
        // TODO remove, temporary measure to implement expressions 1 b 1
    }

    compile(context: Context, module: WasmModule, body: FunctionCode): void {
        // TODO remove, temporary measure to implement expressions 1 b 1
    }

};
