import LiteralBase from "./LiteralBase.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";

export default class SetLiteral extends LiteralBase<Set<any>> {

    readonly readOnly: boolean;

    constructor(text: string, readOnly: boolean, values: IExpression[]) {
        super(text, new Set<IExpression>(values));
        this.readOnly = readOnly;
    }

    get isReadOnly(): boolean {
        return this.readOnly;
    }

    toNative(): Set<any> {
        const values = Array.from(this.value).map(v => v instanceof LiteralBase ? v.toNative() : v.toString());
        return new Set<any>(values);
    }

    check(context: Context): IType {
        return undefined; // TODO
    }

}
