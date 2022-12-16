import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";

export default interface IStatement {
    check(context: Context): IType;
    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    compile(context: Context, module: WasmModule, body: FunctionBody): void;
}
