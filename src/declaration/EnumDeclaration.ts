import DeclarationBase from "./DeclarationBase";
import KeyValuePair from "../utils/KeyValuePair";
import Identifier from "../builder/Identifier";
import IExpression from "../expression/IExpression";
import IType from "../type/IType";
import Context from "../context/Context";
import * as assert from "assert";
import TypeMap from "../type/TypeMap";

export default class EnumDeclaration extends DeclarationBase {

    members: KeyValuePair<Identifier, IExpression>[];

    constructor(id: Identifier, members: KeyValuePair<Identifier, IExpression>[]) {
        super(id);
        this.members = members;
    }

    register(context: Context): void {
        context.registerEnum(this);
    }

    check(context: Context): IType {
        const names = new Set<string>();
        const types = new TypeMap();
        this.members.forEach(kvp => {
            assert.ok(!names.has(kvp.key.value));
            names.add(kvp.key.value);
            const type = kvp.value.check(context);
            types.add(type);
        });
        return types.inferType(context);
    }

}
