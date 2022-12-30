import ICodeFragment from "../builder/ICodeFragment";
import Context from "../context/Context";
import Annotation from "../builder/Annotation";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import ExportType from "../compiler/ExportType";

export default interface IDeclaration extends ICodeFragment {

    annotations: Annotation[];
    exportType: ExportType;
    name: string;

    register(context: Context): void;
    check(context: Context): IType;
    declare(context: Context, module: WasmModule): void;
}
