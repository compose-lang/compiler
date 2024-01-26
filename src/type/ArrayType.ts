import CollectionType from "./CollectionType.ts";
import IType from "./IType.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";
import { Type } from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { PackedType } from "../binaryen/binaryen_wasm.js";
import {assertTrue} from "../../deps.ts";
import {IntegerType} from "./index.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import ReflectionRegistry from "../registry/ReflectionRegistry.ts";

interface ArrayTypeOptions {
    nullable?: boolean;
    itemsMutable?: boolean;
    itemsNullable?: boolean;
}

export default class ArrayType extends CollectionType {
    constructor(elementType: IType) {
        super("array<" + elementType.typeName + ">", elementType);
    }

    defaultValue(): IExpression {
        assertTrue(false); // TODO
    }

    asType(context: Context, options?: ArrayTypeOptions): Type {
        options = Object.assign({ nullable: false, itemsMutable: false, itemsNullable: false }, options);
        const elementType = { type: this.elementType.asType(context), packedType: this.elementType.packedType(), mutable: options.itemsMutable };
        const arrayType = HeapTypeRegistry.instance.getArrayGCType(elementType, options.itemsNullable);
        const valueType = { type: arrayType.type, packedType: PackedType.NotPacked, mutable: false };
        const gcType = HeapTypeRegistry.instance.getWrapperGCType(valueType, options.nullable);
        return gcType.type;
    }

    asTypeInfo(context: Context): TypeInfo {
        return ReflectionRegistry.instance.getArrayTypeInfo(context, this.elementType);
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
