import UserType from "./UserType.ts";
import Identifier from "../builder/Identifier.ts";
import { Type } from "../binaryen/binaryen_wasm.d.ts";
import Context from "../context/Context.ts";
import TypeInfo from "../reflection/TypeInfo.ts";

export default class UnresolvedUserType extends UserType {

    isNullable = false;
    id: Identifier;


    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get typeName(): string {
        return this.id.value;
    }

    asType(context: Context): Type {
        return undefined;
    }

    asTypeInfo(context: Context): TypeInfo {
        return undefined;
    }

}
