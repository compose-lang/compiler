import LiteralBase from "./LiteralBase";
import BooleanType from "../type/BooleanType";
import IType from "../type/IType";
import Context from "../context/Context";

export default class BooleanLiteral extends LiteralBase<boolean> {

    constructor(text: string) {
        super(text, text === "true");
    }

    toNative(): boolean {
        return this.value;
    }

    check(context: Context): IType {
        return BooleanType.instance;
    }
}
