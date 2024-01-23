import ArrayInfo from "../reflection/ArrayInfo.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import IType from "../type/IType.ts";
import NativeInfo from "../reflection/NativeInfo.ts";
import Context from "../context/Context.ts";

export default class ReflectionRegistry {
    static readonly instance = new ReflectionRegistry();

    private nextIndex = 0;
    private typeInfos: TypeInfo[] = [];
    private nativeInfos = new Map<string, NativeInfo>();
    private atomicInfos = new Map<string, TypeInfo>();
    private arrayInfos = new Map<string, ArrayInfo>();
    private constructor() {}

    getTypeInfo(index: number): TypeInfo {
        return this.typeInfos[index];
    }

    getNativeTypeInfo(type: IType): NativeInfo {
        if(!this.nativeInfos.has(type.typeName)) {
            const info = new NativeInfo(this.nextIndex++, type.typeName, type.asType(null));
            this.nativeInfos.set(type.typeName, info);
            this.typeInfos.push(info);
        }
        return this.nativeInfos.get(type.typeName);
    }

    getAtomicTypeInfo(type: IType): TypeInfo {
        throw new Error("Method not implemented.");
    }

    getArrayTypeInfo(context: Context, elementType: IType): TypeInfo {
        if(!this.arrayInfos.has(elementType.typeName)) {
            const elemInfo = elementType.asTypeInfo(context);
            const arrayInfo = new ArrayInfo(this.nextIndex++, elemInfo);
            this.arrayInfos.set(elementType.typeName, arrayInfo);
            this.typeInfos.push(arrayInfo);
        }
        return this.arrayInfos.get(elementType.typeName);
    }



}
