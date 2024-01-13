import UserType from "./UserType.ts";
import Identifier from "../builder/Identifier.ts";
import { Type } from "../binaryen/binaryen_wasm.d.ts";
import Context from "../context/Context.ts";

export default class UnresolvedUserType extends UserType {

    nullable = false;
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

}