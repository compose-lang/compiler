import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import ExpressionBody from "../module/ExpressionBody";

export default interface IExpression {

    check(context: Context): IType;
    declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: ExpressionBody): void;
    compile(context: Context, module: WasmModule, body: ExpressionBody): void;

}
