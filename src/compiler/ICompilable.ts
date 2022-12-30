import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import CompilationUnit from "./CompilationUnit";

export default interface ICompilable {

    unit: CompilationUnit;

    compile(context: Context, module: WasmModule): void;

}

