import LiteralBase from "./LiteralBase";

export default class CharLiteral extends LiteralBase<string> {

    constructor(text: string) {
        super(text, text.substring(1, text.length - 1));
    }


    toNative(): string {
        return this.value;
    }

}
