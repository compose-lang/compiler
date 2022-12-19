import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import IDeclarable from "./IDeclarable";

export default interface ICompilable extends IDeclarable {
    compile(context: Context, module: WasmModule): void;
}

