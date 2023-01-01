import CodeFragment from "../builder/CodeFragment";
import IStatement from "./IStatement";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Annotation from "../builder/Annotation";
import ExportType from "../compiler/ExportType";
import CompilationUnit from "../compiler/CompilationUnit";
import * as assert from "assert";

export default abstract class StatementBase extends CodeFragment implements IStatement {

    _unit: CompilationUnit;
    annotations: Annotation[];
    exportType: ExportType;

    isModuleExport() {
        return this.annotations && this.annotations.some(a => a.name === "@ModuleExport");
    }

    set unit(unit: CompilationUnit) {
        this._unit = unit;
    }

    get unit() {
        return this._unit;
    }

    abstract check(context: Context): IType;
    abstract declare(context: Context, module: WasmModule): void;
    constify(context: Context, module: WasmModule): void {
        assert.ok(false);
    }
    abstract rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    abstract compile(context: Context, module: WasmModule, body: FunctionBody): IType;

}
