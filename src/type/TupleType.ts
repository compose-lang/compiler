import IType from "./IType.ts";
import TypeList from "./TypeList.ts";
import Context from "../context/Context.ts";
import FunctionType from "./FunctionType.ts";
import UserType from "./UserType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import TypeInfo from "../reflection/TypeInfo.ts";

export default class TupleType extends UserType {

    isNullable = false;
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

    asType(context: Context): Type {
       assertTrue(false)
    }

    asTypeInfo(context: Context): TypeInfo {
        assertTrue(false)
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return false;
    }

    prepareContext(context: Context): Context {
        assertTrue(false); // TODO
    }

    private validTypes(context: Context) {
        return this.types.filter(type => type.asType(context) > 0);
    }
}

