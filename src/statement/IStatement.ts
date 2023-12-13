import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Annotation from "../builder/Annotation";
import ExportType from "../compiler/ExportType";
import CompilationUnit from "../compiler/CompilationUnit";
import CompilerFlags from "../compiler/CompilerFlags";
import IResults from "./IResults";
import {ExpressionRef} from "../binaryen/binaryen_ts";

export default interface IStatement {

    unit: CompilationUnit;
    annotations: Annotation[];
    exportType: ExportType;

    check(context: Context): IType;
    isConst(context: Context): boolean;
    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults;
    registerDebugInfo(body: FunctionBody, refs: ExpressionRef[]): void;
}
