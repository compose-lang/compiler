import CodeSection from "../builder/CodeSection";
import IStatement from "./IStatement";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";

export default abstract class StatementBase extends CodeSection implements IStatement {
    abstract declare(context: Context, module: WasmModule): void;
}
