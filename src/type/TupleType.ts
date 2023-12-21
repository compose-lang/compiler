import IType from "./IType.ts";
import TypeList from "./TypeList.ts";
import Context from "../context/Context.ts";
import FunctionType from "./FunctionType.ts";
import UserType from "./UserType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assert} from "../../deps.ts";

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
       assert(false)
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return false;
    }

    prepareContext(context: Context): Context {
        assert(false); // TODO
    }

    private validTypes() {
        return this.types.filter(type => type.asType() > 0);
    }
}

