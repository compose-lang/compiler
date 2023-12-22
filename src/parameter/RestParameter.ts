import TypedParameter from "./TypedParameter.ts";
import IType from "../type/IType.ts";
import ArrayType from "../type/ArrayType.ts";
import { assert } from "../../deps.ts";

export default class RestParameter extends TypedParameter {

    get atomicType(): IType {
        assert(this.type instanceof ArrayType);
        return this.type.elementType;
    }
}
