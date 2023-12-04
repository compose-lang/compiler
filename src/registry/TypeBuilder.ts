import binaryen from "binaryen";
import PackedType from "./PackedType";
import Type = binaryen.Type;
import HeapType from "./HeapType";

// const arraytype = (binaryen["_BinaryenHeapTypeArray" as keyof typeof binaryen] as () => Type)();

type TypeBuilderRef = number;
const createTypeBuilder = binaryen["_TypeBuilderCreate" as keyof typeof binaryen] as (count: number) => TypeBuilderRef;
const setArrayType = binaryen["_TypeBuilderSetArrayType" as keyof typeof binaryen] as (builder: TypeBuilderRef, slot: number, elementType: Type, elementPackedType: PackedType, mutable: boolean) => void;
const buildAndDispose = binaryen["_TypeBuilderBuildAndDispose" as keyof typeof binaryen] as (builder: TypeBuilderRef) => (number | number[]);


export default class TypeBuilder {

    readonly ref: TypeBuilderRef;

    constructor(slots: number) {
        this.ref = createTypeBuilder(slots);
    }

    setArrayType(slot: number, elementType: binaryen.Type, packedType: PackedType, mutable: boolean) {
        setArrayType(this.ref, slot, elementType, packedType, mutable);
    }


    buildAndDispose(): HeapType[] {
        const res = buildAndDispose(this.ref);
        return Array.isArray(res) ? res : [res];
    }
}
