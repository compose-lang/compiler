import LiteralBase from "./LiteralBase";
import IExpression from "./IExpression";
import Identifier from "../builder/Identifier";
import KeyValuePair from "../utils/KeyValuePair";

export default class MapLiteral extends LiteralBase<Map<any, any>> {

    constructor(text: string, entries: KeyValuePair<Identifier, IExpression>[]) {
        super(text, new Map<Identifier, IExpression>(entries.map(e => e.asArray())));
    }

    toNative(): Map<any, any> {
        const entries = new Map<string, any>();
        this.value.forEach((value, key) => entries.set(key.value, value instanceof LiteralBase ? value.toNative() : value.toString()));
        return entries;
    }

}
