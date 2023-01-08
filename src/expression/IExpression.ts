import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";

export default interface IExpression {

    check(context: Context): IType;

    isConst(context: Context): boolean;
    constify(context: Context): IExpression;

    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    compile(context: Context, module: WasmModule, body: FunctionBody): IType;

    compileAssign(context: Context, module: WasmModule, body: FunctionBody): void; // for unary operators
}
