import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default interface IDeclarable {
    declare(context: Context, module: WasmModule): void;
}

