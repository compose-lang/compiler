import ICodeFragment from "../builder/ICodeFragment";
import Context from "../context/Context";
import Annotation from "../builder/Annotation";
import WasmModule from "../module/wasm/WasmModule";
import IType from "../type/IType";
import ExportType from "../compiler/ExportType";
import CompilationUnit from "../compiler/CompilationUnit";

export default interface IDeclaration extends ICodeFragment {

    unit: CompilationUnit;
    annotations: Annotation[];
    exportType: ExportType;
    name: string;

    isModuleImport(): boolean;
    isModuleExport(): boolean;
    getModuleImportName(): string;

    register(context: Context): void;
    check(context: Context): IType;
    declare(context: Context, module: WasmModule): void;

}
