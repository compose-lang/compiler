import Context from "../context/Context";
import Module from "../module/WasmModule";
import CompilationUnit from "./CompilationUnit";
import CompilerFlags from "./CompilerFlags";

export default interface ICompilable {

    unit: CompilationUnit;

    compile(context: Context, module: Module, flags: CompilerFlags): void;

}

