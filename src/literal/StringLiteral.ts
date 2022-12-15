import LiteralBase from "./LiteralBase";
import Context from "../context/Context";
import IType from "../type/IType";
import StringType from "../type/StringType";

export default class StringLiteral extends LiteralBase<string> {

    constructor(text: string) {
        super(text, text.substring(1, text.length - 1));
    }

    toNative(): string {
        return this.value;
    }

    check(context: Context): IType {
        return StringType.instance;
    }

}
