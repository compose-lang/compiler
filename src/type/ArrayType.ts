import CollectionType from "./CollectionType";
import IType from "./IType";
import IWasmTarget from "../compiler/IWasmTarget";
import IExpression from "../expression/IExpression";
import * as assert from "assert";

export default class ArrayType extends CollectionType {

    constructor(atomicType: IType) {
        super("array<" + atomicType.typeName + ">", atomicType);
    }

    defaultValue(): IExpression {
        assert.ok(false); // TODO
    }

    asType(): number {
        assert.ok(false); // TODO
    }
}
