import Module from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/wasm/FunctionBody";
import IType from "../type/IType";
import Annotation from "../builder/Annotation";
import ExportType from "../compiler/ExportType";
import CompilationUnit from "../compiler/CompilationUnit";
import CompilerFlags from "../compiler/CompilerFlags";

export default interface IStatement {

    unit: CompilationUnit;
    annotations: Annotation[];
    exportType: ExportType;

    check(context: Context): IType;
    isConst(context: Context): boolean;
    declare(context: Context, module: Module): void;
    rehearse(context: Context, module: Module, body: FunctionBody): void;

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType;

}
