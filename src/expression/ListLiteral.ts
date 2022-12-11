import LiteralBase from "./LiteralBase";
import IExpression from "./IExpression";

export default class ListLiteral extends LiteralBase<any[]> {

    constructor(text: string, values: IExpression[]) {
        super(text, values);
    }

    toNative(): any[] {
        return this.value.map(v => v instanceof LiteralBase ? v.toNative() : v.toString());
    }


}
