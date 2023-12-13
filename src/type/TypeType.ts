import IType from "./IType";
import * as assert from "assert";
import Context from "../context/Context";
import UserType from "./UserType";
import {Type} from "../binaryen/binaryen_ts";

export default class TypeType extends UserType {

    type: IType;

    constructor(type: IType) {
        super();
        this.type = type;
    }

    get typeName(): string {
        return "typeof<" + this.type.typeName + ">";
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof TypeType;
    }

    prepareContext(context: Context): Context {
        return context.newStaticContext(this.type);
    }

    count(): number {
        assert.ok(false); // TODO will we ever need this ?
    }

    asType(): Type {
        assert.ok(false); // TODO will we ever need this ?
    }

}
