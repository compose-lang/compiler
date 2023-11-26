import Context from "../context/Context";
import WasmModule from "../module/wasm/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import IType from "../type/IType";
import CompilerFlags from "../compiler/CompilerFlags";

export default interface IExpression {

    check(context: Context): IType;

    isConst(context: Context): boolean;
    constify(context: Context): IExpression;

    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IType;
    compileAssign(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): void; // for unary operators
}
