import CodeFragment from "../builder/CodeFragment";
import IExpression from "./IExpression";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";

export default abstract class ExpressionBase extends CodeFragment implements IExpression {
    abstract check(context: Context): IType;
    abstract declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        // TODO remove, temporary measure to implement expressions 1 b 1
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): void {
        // TODO remove, temporary measure to implement expressions 1 b 1
    }

};
