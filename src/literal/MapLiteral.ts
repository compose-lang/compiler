import LiteralBase from "./LiteralBase.ts";
import IExpression from "../expression/IExpression.ts";
import Identifier from "../builder/Identifier.ts";
import KeyValuePair from "../utils/KeyValuePair.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";

export default class MapLiteral extends LiteralBase<Map<any, any>> {

    readonly readOnly: boolean;

    constructor(text: string, readOnly: boolean, entries: KeyValuePair<Identifier, IExpression>[]) {
        super(text, new Map<Identifier, IExpression>(entries.map(e => e.asArray())));
        this.readOnly = readOnly;
    }

    get isReadOnly(): boolean {
        return this.readOnly;
    }

    toNative(): Map<any, any> {
        const entries = new Map<string, any>();
        this.value.forEach((value, key) => entries.set(key.value, value instanceof LiteralBase ? value.toNative() : value.toString()));
        return entries;
    }

    check(context: Context): IType {
        return undefined; // TODO
    }

}
