import LiteralBase from "./LiteralBase.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import NullType from "../type/NullType.ts";

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
