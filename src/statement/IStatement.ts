import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionCode from "../module/FunctionCode";

export default interface IStatement {
    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionCode): void;
    compile(context: Context, module: WasmModule, body: FunctionCode): void;
}
