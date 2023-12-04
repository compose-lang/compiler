import IType from "./IType";
import Identifier from "../builder/Identifier";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import UserType from "./UserType";
import * as assert from "assert";
import binaryen from "binaryen";
import Type = binaryen.Type;

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
        assert.ok(false); // TODO
    }

    asType(): Type {
        assert.ok(false); // TODO
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        assert.ok(false); // TODO
    }

    prepareContext(context: Context): Context {
        assert.ok(false); // TODO
    }

}
