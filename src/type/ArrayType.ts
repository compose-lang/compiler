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

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F); // offset in data
    }
}
