import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import CompilationUnit from "./CompilationUnit";
import CompilerFlags from "./CompilerFlags";
import FunctionBody from "../module/FunctionBody";

export default interface ICompilable {

    unit: CompilationUnit;

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): void;

}

