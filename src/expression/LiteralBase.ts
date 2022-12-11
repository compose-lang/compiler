import ExpressionBase from "./ExpressionBase";

export default abstract class LiteralBase<T> extends ExpressionBase {

    text: string;
    value: T;

    constructor(text: string, value: T) {
        super();
        this.text = text;
        this.value = value;
    }

    abstract toNative(): T;

}
