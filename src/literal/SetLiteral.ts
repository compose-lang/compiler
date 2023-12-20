import LiteralBase from "./LiteralBase.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";

export default class SetLiteral extends LiteralBase<Set<any>> {

    constructor(text: string, values: IExpression[]) {
        super(text, new Set<IExpression>(values));
    }

    toNative(): Set<any> {
        const values = Array.from(this.value).map(v => v instanceof LiteralBase ? v.toNative() : v.toString());
        return new Set<any>(values);
    }

    check(context: Context): IType {
        return undefined; // TODO
    }

}
