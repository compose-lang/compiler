import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import CompilationUnit from "./CompilationUnit.ts";
import CompilerFlags from "./CompilerFlags.ts";
import FunctionBody from "../module/FunctionBody.ts";

export default interface ICompilable {

    unit: CompilationUnit;

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): void;

}

