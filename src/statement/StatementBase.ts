import CodeFragment from "../builder/CodeFragment";
import IStatement from "./IStatement";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionCode from "../module/FunctionCode";

export default abstract class StatementBase extends CodeFragment implements IStatement {
    abstract declare(context: Context, module: WasmModule): void;
    abstract rehearse(context: Context, module: WasmModule, body: FunctionCode): void;
    abstract compile(context: Context, module: WasmModule, body: FunctionCode): void;
}
