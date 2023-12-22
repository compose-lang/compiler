import CollectionType from "./CollectionType.ts";
import IType from "./IType.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assert} from "../../deps.ts";

export default class SetType extends CollectionType {

    constructor(atomicType: IType) {
        super("set<" + atomicType.typeName + ">", atomicType);
    }

    defaultValue(): IExpression {
        assert(false); // TODO
    }

    asType(): Type {
        assert(false); // TODO
    }
}
