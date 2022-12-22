import ExpressionBase from "../expression/ExpressionBase";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import ILiteralExpression from "./ILiteralExpression";
import FunctionBody from "../module/FunctionBody";

export default abstract class LiteralBase<T> extends ExpressionBase implements ILiteralExpression {

    text: string;
    value: T;

    constructor(text: string, value: T) {
        super();
        this.text = text;
        this.value = value;
    }

    declare(context: Context, module: WasmModule): void {
        // nothing to do
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        return this.check(context);
    }

    abstract toNative(): T;

}
