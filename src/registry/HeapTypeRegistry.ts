import binaryen from "binaryen";
import Type = binaryen.Type;
import PackedType from "./PackedType";
import TypeBuilder from "./TypeBuilder";
import HeapType from "./HeapType";

const typeFromHeapType = binaryen["_BinaryenTypeFromHeapType" as keyof typeof binaryen] as (type: HeapType) => Type;

export default class HeapTypeRegistry {

    static readonly instance = new HeapTypeRegistry();

    arrayTypesMap = new Map<Type, HeapType>();
    heapTypesMap = new Map<HeapType, Type>();

    private constructor() {
    }

    getArrayType(elementType: Type, mutable = false, packedType: PackedType = PackedType.NotPacked): [Type, HeapType] {
        if(!this.arrayTypesMap.has(elementType)) {
            const builder = new TypeBuilder(1);
            builder.setArrayType(0, elementType, packedType, mutable);
            const heapTypes = builder.buildAndDispose();
            this.arrayTypesMap.set(elementType, heapTypes[0]);
        }
        const heapType = this.arrayTypesMap.get(elementType);
        if(!this.heapTypesMap.has(heapType)) {
            const type = typeFromHeapType(heapType);
            this.heapTypesMap.set(heapType, type)
        }
        const type = this.heapTypesMap.get(heapType);
        return [type, heapType];
    }
}
