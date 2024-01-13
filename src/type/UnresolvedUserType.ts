import UserType from "./UserType.ts";
import Identifier from "../builder/Identifier.ts";
import { Type } from "../binaryen/binaryen_wasm.d.ts";

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

    asType(): Type {
        return undefined;
    }

    count(): number {
        return 0;
    }

}