import CollectionType from "./CollectionType";
import IType from "./IType";
import IWasmTarget from "../compiler/IWasmTarget";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import binaryen from "../../../../binaryen.js";

export default class ArrayType extends CollectionType {

    constructor(atomicType: IType) {
        super("array<" + atomicType.typeName + ">", atomicType);
    }

    defaultValue(): IExpression {
        assert.ok(false); // TODO
    }

    asType(): number {
        return binaryen.i32; // as an offset of the data to the memory start
    }
}
