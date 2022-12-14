import CodeSection from "../builder/CodeSection";
import IExpression from "./IExpression";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";

export default abstract class ExpressionBase extends CodeSection implements IExpression {
    abstract declare(context: Context, module: WasmModule): void;
};
