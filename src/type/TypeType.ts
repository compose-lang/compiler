import IType from "./IType.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import {Type} from "../binaryen/binaryen_ts.ts";
import {assert} from "../../deps.ts";

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
        assert(false); // TODO will we ever need this ?
    }

    asType(): Type {
        assert(false); // TODO will we ever need this ?
    }

}
