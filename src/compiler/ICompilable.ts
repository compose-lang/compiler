import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default interface ICompilable {
    compile(context: Context, module: WasmModule): void;
}

