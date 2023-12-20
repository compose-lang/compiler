import DeclarationBase from "./DeclarationBase.ts";
import KeyValuePair from "../utils/KeyValuePair.ts";
import Identifier from "../builder/Identifier.ts";
import IExpression from "../expression/IExpression.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import TypeMap from "../type/TypeMap.ts";
import { assert } from "../../deps.ts";
import {assertFalse} from "https://deno.land/std@0.209.0/assert/assert_false.ts";

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
            assertFalse(names.has(kvp.key.value));
            names.add(kvp.key.value);
            const type = kvp.value.check(context);
            types.add(type);
        });
        return types.inferType(context);
    }

}
