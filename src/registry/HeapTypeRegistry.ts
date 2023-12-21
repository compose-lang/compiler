import {Type, HeapType} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {PackedType, TypeBuilder} from "../binaryen/binaryen_wasm.js";

export default class HeapTypeRegistry {

    static readonly instance = new HeapTypeRegistry();

    arrayTypesMap = new Map<Type, HeapType>();
    heapTypesMap = new Map<HeapType, Type>();

    private constructor() {
    }

    // TODO set heap type name using BinaryenModuleSetTypeName
    getArrayType(elementType: Type, mutable = true, packedType = PackedType.NotPacked, nullable = true): [Type, HeapType] {
        if(!this.arrayTypesMap.has(elementType)) {
            const builder = new TypeBuilder(1);
            builder.setArrayType(0, elementType, packedType, mutable);
            const result = builder.buildAndDispose();
            this.arrayTypesMap.set(elementType, result.heapTypes[0]);
        }
        const heapType = this.arrayTypesMap.get(elementType)!;
        if(!this.heapTypesMap.has(heapType)) {
            const type = TypeBuilder.typeFromTempHeapType(heapType, nullable);
            this.heapTypesMap.set(heapType, type)
        }
        const type = this.heapTypesMap.get(heapType)!;
        return [type, heapType];
    }
}
