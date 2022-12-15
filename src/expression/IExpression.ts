import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionCode from "../module/FunctionBody";

export default interface IExpression {

    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionCode): void;
    compile(context: Context, module: WasmModule, body: FunctionCode): void;
}
