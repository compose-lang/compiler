import CodeFragment from "../builder/CodeFragment";
import IStatement from "./IStatement";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Annotation from "../builder/Annotation";
import ExportType from "../compiler/ExportType";

export default abstract class StatementBase extends CodeFragment implements IStatement {

    annotations: Annotation[];
    exportType: ExportType;

    isModuleExport() {
        return this.annotations && this.annotations.some(a => a.name === "@ModuleExport");
    }

    abstract check(context: Context): IType;
    abstract declare(context: Context, module: WasmModule): void;
    abstract rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    abstract compile(context: Context, module: WasmModule, body: FunctionBody): IType;

}
