import CollectionType from "./CollectionType";
import IType from "./IType";
import IExpression from "../expression/IExpression";
import assert from "assert";
import IWasmTarget from "../compiler/IWasmTarget";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class SetType extends CollectionType {

    constructor(atomicType: IType) {
        super("set<" + atomicType.typeName + ">", atomicType);
    }

    defaultValue(): IExpression {
        assert.ok(false); // TODO
    }

    asType(): Type {
        assert.ok(false); // TODO
    }
}
