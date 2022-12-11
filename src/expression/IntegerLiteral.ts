import LiteralBase from "./LiteralBase";

export default class IntegerLiteral extends LiteralBase<number> {

    public static parseInteger(text: string): number {
        if(text[0] === "0") {
            switch(text[1]) {
                case 'x':
                case 'X':
                    return parseInt(text.substring(2), 16);
                case 'b':
                case 'B':
                    return parseInt(text.substring(2), 2);
                default:
                    return parseInt(text.substring(1), 8);
            }
        } else {
            text = text.replace(/_/g, "");
            return parseInt(text);
        }
    }

    constructor(text: string) {
        super(text, IntegerLiteral.parseInteger(text));
    }

    toNative(): number {
        return this.value;
    }

}
