import WasmModule from "../module/WasmModule";
import Context from "../context/Context";

export default interface IStatement {
    declare(context: Context, module: WasmModule): void;
}
