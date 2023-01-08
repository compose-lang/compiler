import TypedParameter from "./TypedParameter";
import IType from "../type/IType";
import * as assert from "assert";
import ArrayType from "../type/ArrayType";

export default class RestParameter extends TypedParameter {

    get atomicType(): IType {
        assert.ok(this.type instanceof ArrayType);
        return this.type.atomicType;
    }
}
