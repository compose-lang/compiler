import LiteralBase from "./LiteralBase";
import IType from "../type/IType";
import Context from "../context/Context";
import NullType from "../type/NullType";

export default class NullLiteral extends LiteralBase<any> {

    constructor() {
        super("null", null);
    }

    toNative(): any {
        return null;
    }

    check(context: Context): IType {
        return NullType.instance;
    }

}
