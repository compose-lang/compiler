import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import IStatement from "./IStatement";

export default interface IGlobalStatement extends IStatement {
    register(context: Context): void;
    constify(context: Context, module: WasmModule): void;
}
