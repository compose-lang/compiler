import ICodeFragment from "../builder/ICodeFragment.ts";
import Context from "../context/Context.ts";
import Annotation from "../builder/Annotation.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import ExportType from "../compiler/ExportType.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";

export default interface IDeclaration extends ICodeFragment {

    unit: CompilationUnit;
    annotations: Annotation[];
    exportType: ExportType;
    name: string;
    fullName: string;

    isModuleImport(): boolean;
    isModuleExport(): boolean;
    getModuleImportName(): string;

    register(context: Context): void;
    check(context: Context): IType;
    declare(context: Context, module: WasmModule): void;

}
