import Context from "../context/Context";
import Module from "../module/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import IType from "../type/IType";
import CompilerFlags from "../compiler/CompilerFlags";

export default interface IExpression {

    check(context: Context): IType;

    isConst(context: Context): boolean;
    constify(context: Context): IExpression;

    declare(context: Context, module: Module): void;
    rehearse(context: Context, module: Module, body: FunctionBody): void;
    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType;
    compileAssign(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): void; // for unary operators
}
