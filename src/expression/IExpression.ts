import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default interface IExpression {

    declare(context: Context, module: WasmModule): void;
}
