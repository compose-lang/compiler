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

export default interface IStatement {

    unit: CompilationUnit | null;
    annotations: Annotation[] | null;
    exportType: ExportType;

    check(context: Context): IType;
    isConst(context: Context): boolean;
    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults;
    registerDebugInfo(body: FunctionBody, refs: ExpressionRef[]): void;
}
