import LiteralBase from "./LiteralBase";

export default class BooleanLiteral extends LiteralBase<boolean> {

    constructor(text: string) {
        super(text, text === "true");
    }

    toNative(): boolean {
        return this.value;
    }
}
