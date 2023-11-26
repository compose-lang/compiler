import ExpressionBase from "../expression/ExpressionBase";
import WasmModule from "../module/wasm/WasmModule";
import Context from "../context/Context";
import ILiteralExpression from "./ILiteralExpression";
import FunctionBody from "../module/wasm/FunctionBody";
import IExpression from "../expression/IExpression";

export default abstract class LiteralBase<T> extends ExpressionBase implements ILiteralExpression {

    text: string;
    value: T;

    constructor(text: string, value: T) {
        super();
        this.text = text;
        this.value = value;
    }

    isConst(context: Context) {
        return true;
    }

    constify(context: Context): IExpression {
        return this;
    }

    declare(context: Context, module: WasmModule): void {
        // nothing to do
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        return this.check(context);
    }

    abstract toNative(): T;

}
