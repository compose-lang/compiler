import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "./IResult";
import {ExpressionRef} from "../binaryen/binaryen_ts";

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
