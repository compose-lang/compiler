import {FieldType, HeapType, Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {i32, PackedType, TypeBuilder} from "../binaryen/binaryen_wasm.js";
import StructTypeBase from "../type/StructTypeBase.ts";
import Context from "../context/Context.ts";
import {assertFalse, assertTrue} from "../platform/deno/AssertUtils.ts";

export interface GCType {
    type: Type;
    heapType: HeapType;
}

export default class HeapTypeRegistry {

    static readonly instance = new HeapTypeRegistry();
    private static readonly TYPEINFO_FIELD_TYPE: FieldType = { type: i32, packedType: PackedType.NotPacked, mutable: false };

    private static fieldTypeName(fieldType: FieldType): string {
        return `${fieldType.type}/${fieldType.packedType}/${fieldType.mutable}`
    }

    arrayTypesMap = new Map<string, HeapType>();
    wrapperTypesMap = new Map<string, HeapType>();
    structTypesMap = new Map<string, HeapType>();
    heapTypesMap = new Map<HeapType, Type>();

    private constructor() {
    }

    // TODO set heap type name using BinaryenModuleSetTypeName
    getArrayDataGCType(elementType: FieldType, nullable: boolean): GCType {
        const elementTypeName = HeapTypeRegistry.fieldTypeName(elementType);
        if (!this.arrayTypesMap.has(elementTypeName)) {
            const builder = new TypeBuilder(1);
            builder.setArrayType(0, elementType);
            const result = builder.buildAndDispose();
            this.arrayTypesMap.set(elementTypeName, result.heapTypes[0]);
        }
        const heapType = this.arrayTypesMap.get(elementTypeName)!;
        return { type: this.getTypeFromHeapType(heapType, nullable), heapType };
    }

    getFieldWrapperGCType(fieldType: FieldType, nullable: boolean): GCType {
        const wrappedTypeName = HeapTypeRegistry.fieldTypeName(fieldType);
        if (!this.wrapperTypesMap.has(wrappedTypeName)) {
            const builder = new TypeBuilder(1);
            builder.setStructType(0, [ HeapTypeRegistry.TYPEINFO_FIELD_TYPE, fieldType]);
            const result = builder.buildAndDispose();
            this.wrapperTypesMap.set(wrappedTypeName, result.heapTypes[0]);
        }
        const heapType = this.wrapperTypesMap.get(wrappedTypeName)!;
        return { type: this.getTypeFromHeapType(heapType, nullable), heapType };
    }

    getStructGCType(context: Context, structType: StructTypeBase, nullable: boolean): GCType {
        if (!this.structTypesMap.has(structType.typeName)) {
            const builder = new TypeBuilder(1);
            const fieldTypes = structType.getFieldTypes(context);
            fieldTypes.unshift(HeapTypeRegistry.TYPEINFO_FIELD_TYPE);
            builder.setStructType(0, fieldTypes);
            const result = builder.buildAndDispose();
            this.structTypesMap.set(structType.typeName, result.heapTypes[0]);
        }
        const heapType = this.structTypesMap.get(structType.typeName)!;
        return { type: this.getTypeFromHeapType(heapType, nullable), heapType };
    }


    getTypeFromHeapType(heapType: HeapType, nullable: boolean): Type {
        if(!this.heapTypesMap.has(heapType)) {
            const type = TypeBuilder.typeFromTempHeapType(heapType, nullable);
            this.heapTypesMap.set(heapType, type)
        }
        return this.heapTypesMap.get(heapType)!;
    }

    getHeapTypeFromType(type: Type): HeapType {
        return TypeBuilder.heapTypeFromType(type);
    }
}
