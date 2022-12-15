import LiteralBase from "./LiteralBase";
import IType from "../type/IType";
import Context from "../context/Context";

export default class NullLiteral extends LiteralBase<any> {

    constructor(text: string) {
        super(text, null);
    }

    toNative(): any {
        return null;
    }

    check(context: Context): IType {
        return undefined; // TODO
    }

}
