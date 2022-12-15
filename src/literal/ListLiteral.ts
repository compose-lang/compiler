import LiteralBase from "./LiteralBase";
import IExpression from "../expression/IExpression";
import Context from "../context/Context";
import IType from "../type/IType";

export default class ListLiteral extends LiteralBase<any[]> {

    constructor(text: string, values: IExpression[]) {
        super(text, values);
    }

    toNative(): any[] {
        return this.value.map(v => v instanceof LiteralBase ? v.toNative() : v.toString());
    }

    check(context: Context): IType {
        return undefined; // TODO
    }

}
