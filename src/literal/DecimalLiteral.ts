import LiteralBase from "./LiteralBase";
import IType from "../type/IType";
import Context from "../context/Context";

export default class DecimalLiteral extends LiteralBase<number> {

    public static parseDecimal(text: string): number {
        text = text.replace(/_/g, "");
        return parseFloat(text);
    }

    constructor(text: string) {
        super(text, DecimalLiteral.parseDecimal(text));
    }

    toNative(): number {
        return this.value;
    }

    check(context: Context): IType {
        return undefined; // TODO
    }

}
