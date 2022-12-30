import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Annotation from "../builder/Annotation";
import ExportType from "../compiler/ExportType";
import CompilationUnit from "../compiler/CompilationUnit";

export default interface IStatement {

    unit: CompilationUnit;
    annotations: Annotation[];
    exportType: ExportType;

    check(context: Context): IType;
    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    compile(context: Context, module: WasmModule, body: FunctionBody): IType;

}
