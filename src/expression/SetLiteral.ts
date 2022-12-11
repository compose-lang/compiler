import LiteralBase from "./LiteralBase";
import IExpression from "./IExpression";

export default class SetLiteral extends LiteralBase<Set<any>> {

    constructor(text: string, values: IExpression[]) {
        super(text, new Set<IExpression>(values));
    }

    toNative(): Set<any> {
        const values = Array.from(this.value).map(v => v instanceof LiteralBase ? v.toNative() : v.toString());
        return new Set<any>(values);
    }


}
