import CollectionType from "./CollectionType";
import IType from "./IType";
import IExpression from "../expression/IExpression";
import assert from "assert";
import IWasmTarget from "../compiler/IWasmTarget";

export default class SetType extends CollectionType {

    constructor(atomicType: IType) {
        super("set<" + atomicType.typeName + ">", atomicType);
    }

    defaultValue(): IExpression {
        assert.ok(false); // TODO
    }

    writeTo(target: IWasmTarget): void {
        assert.ok(false); // TODO
    }
}
