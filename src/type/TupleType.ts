import IType from "./IType";
import TypeList from "./TypeList";
import Context from "../context/Context";
import FunctionType from "./FunctionType";
import UserType from "./UserType";
import assert from "assert";
import {Type} from "../binaryen/binaryen_ts";

export default class TupleType extends UserType {

    nullable = false;
    typeName = "Tuple";
    types: TypeList;

    constructor(types: TypeList) {
        super();
        this.types = types;
    }

    toString() {
        const returns = this.types.map(type => type.toString());
        return FunctionType.flatten(returns);
    }

    count(): number {
        return this.validTypes().length;
    }

    asType(): Type {
       assert.ok(false)
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return false;
    }

    prepareContext(context: Context): Context {
        assert.ok(false); // TODO
    }

    private validTypes() {
        return this.types.filter(type => type.asType() > 0);
    }
}

