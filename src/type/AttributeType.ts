import IType from "./IType.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assert} from "../../deps.ts";

export default class AttributeType extends UserType {

    nullable = false;
    id: Identifier;

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get typeName(): string {
        return this.id.value;
    }

    count(): number {
        assert(false); // TODO
    }

    asType(): Type {
        assert(false); // TODO
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        assert(false); // TODO
    }

    prepareContext(context: Context): Context {
        assert(false); // TODO
    }

}
