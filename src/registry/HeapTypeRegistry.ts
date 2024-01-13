import {Type, HeapType, FieldType} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {TypeBuilder} from "../binaryen/binaryen_wasm.js";
import StructTypeBase from "../type/StructTypeBase.ts";
import Context from "../context/Context.ts";

export interface GCType {
    type: Type;
    heapType: HeapType;
}

export default class HeapTypeRegistry {

    static readonly instance = new HeapTypeRegistry();

    arrayTypesMap = new Map<FieldType, HeapType>();
    structTypesMap = new Map<StructTypeBase, HeapType>();
    heapTypesMap = new Map<HeapType, Type>();

    private constructor() {
    }

    // TODO set heap type name using BinaryenModuleSetTypeName
    getArrayGCType(elementType: FieldType, nullable = true): GCType {
        if (!this.arrayTypesMap.has(elementType)) {
            const builder = new TypeBuilder(1);
            builder.setArrayType(0, elementType);
            const result = builder.buildAndDispose();
            this.arrayTypesMap.set(elementType, result.heapTypes[0]);
        }
        const heapType = this.arrayTypesMap.get(elementType)!;
        return { type: this.getTypeFromHeapType(heapType, nullable), heapType };
    }

    getStructGCType(context: Context, structType: StructTypeBase, nullable = true): GCType {
        if (!this.structTypesMap.has(structType)) {
            const builder = new TypeBuilder(1);
            const fieldTypes = structType.getFieldTypes(context);
            builder.setStructType(0, fieldTypes);
            const result = builder.buildAndDispose();
            this.structTypesMap.set(structType, result.heapTypes[0]);
        }
        const heapType = this.structTypesMap.get(structType)!;
        return { type: this.getTypeFromHeapType(heapType, nullable), heapType };
    }


    getTypeFromHeapType(heapType: HeapType, nullable: boolean): Type {
        if(!this.heapTypesMap.has(heapType)) {
            const type = TypeBuilder.typeFromTempHeapType(heapType, nullable);
            this.heapTypesMap.set(heapType, type)
        }
        return this.heapTypesMap.get(heapType)!;
    }
}
