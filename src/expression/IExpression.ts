import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionCode from "../module/FunctionCode";
import IType from "../type/IType";

export default interface IExpression {

    check(context: Context): IType;
    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionCode): void;
    compile(context: Context, module: WasmModule, body: FunctionCode): void;

}
