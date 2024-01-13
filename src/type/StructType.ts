import IType from "./IType.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import IValueType from "./IValueType.ts";
import NullType from "./NullType.ts";
import BooleanType from "./BooleanType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";

export default class StructType extends UserType implements IValueType {

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
        assertTrue(false); // TODO
    }

    asType(): Type {
        assertTrue(false); // TODO
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        if(type == NullType.instance || type.typeName == this.typeName)
            return true;
        else
            assertTrue(false); // TODO
    }

    prepareContext(context: Context): Context {
        assertTrue(false); // TODO
    }

    checkEquals(context: Context, rightType: IType): IType {
        if(this.typeName == rightType.typeName || rightType == NullType.instance)
            return BooleanType.instance;
        else
            return super.checkEquals(context, rightType);
    }

}
