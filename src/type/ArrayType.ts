import CollectionType from "./CollectionType";
import IType from "./IType";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import binaryen from "binaryen";
import Context from "../context/Context";
import Type = binaryen.Type;
import HeapTypeRegistry from "../registry/HeapTypeRegistry";


export default class ArrayType extends CollectionType {

    constructor(elementType: IType) {
        super("array<" + elementType.typeName + ">", elementType);
    }

    defaultValue(): IExpression {
        assert.ok(false); // TODO
    }

    asType(): Type {
        const types = HeapTypeRegistry.instance.getArrayType(this.elementType.asType());
        return types[0];
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof ArrayType && this.elementType.isAssignableFrom(context, type.elementType);
    }
}
