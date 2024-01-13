import CollectionType from "./CollectionType.ts";
import IType from "./IType.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { PackedType } from "../binaryen/binaryen_wasm.js";
import { Type } from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import {IntegerType} from "./index.ts";

export default class ArrayType extends CollectionType {

    constructor(elementType: IType) {
        super("array<" + elementType.typeName + ">", elementType);
    }

    defaultValue(): IExpression {
        assertTrue(false); // TODO
    }

    asType(): Type {
        const elementType = { type: this.elementType.asType(), packedType: PackedType.NotPacked, mutable: true };
        const gcType = HeapTypeRegistry.instance.getArrayGCType(elementType, true);
        return gcType.type;
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof ArrayType && this.elementType.isAssignableFrom(context, type.elementType);
    }

    checkItem(context: Context, item: IExpression): IType {
        const itemType = item.check(context);
        assertTrue(itemType instanceof IntegerType)
        return this.elementType;
    }
}
