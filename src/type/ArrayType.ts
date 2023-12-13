import CollectionType from "./CollectionType";
import IType from "./IType";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import Context from "../context/Context";
import HeapTypeRegistry from "../registry/HeapTypeRegistry";
import {Type} from "../binaryen/binaryen_ts";


export default class ArrayType extends CollectionType {

    constructor(elementType: IType) {
        super("array<" + elementType.typeName + ">", elementType);
    }

    defaultValue(): IExpression {
        assert.ok(false); // TODO
    }

    asType(): Type {
        const types = HeapTypeRegistry.instance.getArrayType(this.elementType.asType(), true);
        return types[0];
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof ArrayType && this.elementType.isAssignableFrom(context, type.elementType);
    }
}
