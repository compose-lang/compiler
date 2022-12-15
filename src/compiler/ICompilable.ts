import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default interface ICompilable {
    declare(context: Context, module: WasmModule): void;
    compile(context: Context, module: WasmModule): void;
}

