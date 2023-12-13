import {HeapType, PackedType, Type, TypeBuilder} from "../binaryen/binaryen_ts";

export default class HeapTypeRegistry {

    static readonly instance = new HeapTypeRegistry();

    arrayTypesMap = new Map<Type, HeapType>();
    heapTypesMap = new Map<HeapType, Type>();

    private constructor() {
    }

    getArrayType(elementType: Type, mutable = false, packedType: PackedType = PackedType.NotPacked, nullable = true): [Type, HeapType] {
        if(!this.arrayTypesMap.has(elementType)) {
            const builder = new TypeBuilder(1);
            builder.setArrayType(0, elementType, packedType, mutable);
            const result = builder.buildAndDispose();
            this.arrayTypesMap.set(elementType, result.heapTypes[0]);
        }
        const heapType = this.arrayTypesMap.get(elementType);
        if(!this.heapTypesMap.has(heapType)) {
            const type = TypeBuilder.typeFromTempHeapType(heapType, nullable);
            this.heapTypesMap.set(heapType, type)
        }
        const type = this.heapTypesMap.get(heapType);
        return [type, heapType];
    }
}
