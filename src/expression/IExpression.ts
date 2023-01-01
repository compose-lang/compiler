import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";

export default interface IExpression {

    check(context: Context): IType;
    isConst(context: Context): boolean;

    declare(context: Context, module: WasmModule): void;
    constify(context: Context, module: WasmModule): IExpression;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    compile(context: Context, module: WasmModule, body: FunctionBody): IType;

}
