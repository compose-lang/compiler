import CodeFragment from "../builder/CodeFragment.ts";
import IStatement from "./IStatement.ts";
import WasmModule from "../module/WasmModule.ts";
import Context from "../context/Context.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import Annotation from "../builder/Annotation.ts";
import ExportType from "../compiler/ExportType.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import {ExpressionRef} from "../binaryen/binaryen_ts.ts";

export default abstract class StatementBase extends CodeFragment implements IStatement {

    _unit: CompilationUnit | null = null;
    annotations: Annotation[] | null = null;
    exportType: ExportType = ExportType.NONE;

    isModuleExport(): boolean {
        return this.exportType!=ExportType.NONE || this.annotations && this.annotations.some(a => a.name === "@ModuleExport") || false;
    }

    set unit(unit: CompilationUnit) {
        this._unit = unit;
    }

    get unit(): CompilationUnit | null {
        return this._unit;
    }

    abstract check(context: Context): IType;
    isConst(context: Context): boolean {
        return false;
    }
    abstract declare(context: Context, module: WasmModule): void;
    abstract rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    abstract compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults;

    registerDebugInfo(body: FunctionBody, refs: ExpressionRef[]) {
        body.registerDebugInfo(refs[0], this.fragment);
    }
}
