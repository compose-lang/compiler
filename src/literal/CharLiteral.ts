import LiteralBase from "./LiteralBase";
import CharType from "../type/CharType";
import IType from "../type/IType";
import Context from "../context/Context";

export default class CharLiteral extends LiteralBase<string> {

    constructor(text: string) {
        super(text, text.substring(1, text.length - 1));
    }


    toNative(): string {
        return this.value;
    }

    check(context: Context): IType {
        return CharType.instance;
    }

}
