import LiteralBase from "./LiteralBase.ts";
import CharType from "../type/CharType.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";

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
