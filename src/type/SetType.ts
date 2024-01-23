import CollectionType from "./CollectionType.ts";
import IType from "./IType.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import Context from "../context/Context.ts";
import TypeInfo from "../reflection/TypeInfo.ts";

export default class SetType extends CollectionType {

    constructor(atomicType: IType) {
        super("set<" + atomicType.typeName + ">", atomicType);
    }

    defaultValue(): IExpression {
        assertTrue(false); // TODO
    }

    asType(context: Context): Type {
        assertTrue(false); // TODO
    }

    asTypeInfo(context: Context): TypeInfo {
        assertTrue(false); // TODO
    }
}
