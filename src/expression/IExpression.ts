import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import {ExpressionRef} from "../binaryen/binaryen_wasm.d.ts";

export default interface IExpression {

    check(context: Context): IType;
    resolveType(context: Context, type: IType): void;

    isConst(context: Context): boolean;
    constify(context: Context): IExpression;

    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult;
    compileAssign(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, value: ExpressionRef): IResult; // for unary operators
}
