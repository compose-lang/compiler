import ExpressionBase from "../expression/ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import Context from "../context/Context.ts";
import ILiteralExpression from "./ILiteralExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IExpression from "../expression/IExpression.ts";

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
