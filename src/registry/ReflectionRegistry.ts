import ArrayInfo from "../reflection/ArrayInfo.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import IType from "../type/IType.ts";
import NativeInfo from "../reflection/NativeInfo.ts";
import Context from "../context/Context.ts";
import ClassInfo from "../reflection/ClassInfo.ts";
import StructInfo from "../reflection/StructInfo.ts";

export default class ReflectionRegistry {
    static readonly instance = new ReflectionRegistry();

    private nextIndex = 0;
    private typeInfos: TypeInfo[] = [];
    private nativeInfos = new Map<string, NativeInfo>();
    private arrayInfos = new Map<string, ArrayInfo>();
    private structInfos = new Map<string, StructInfo>();
    private classInfos = new Map<string, ClassInfo>();
    private constructor() {}

    getNthTypeInfo(index: number) {
        return this.typeInfos[index];
    }

    getTypeInfo(type: IType): TypeInfo {
        return this.nativeInfos.get(type.typeName)
            || this.arrayInfos.get(type.typeName)
            || this.structInfos.get(type.typeName)
            || this.classInfos.get(type.typeName);
    }

    getNativeTypeInfo(type: IType): NativeInfo {
        if(!this.nativeInfos.has(type.typeName)) {
            const info = new NativeInfo(this.nextIndex++, type.typeName, type.asType(null));
            this.nativeInfos.set(type.typeName, info);
            this.typeInfos.push(info);
        }
        return this.nativeInfos.get(type.typeName);
    }

    getStructTypeInfo(_context: Context, type: IType): StructInfo {
        if(!this.structInfos.has(type.typeName)) {
            const info = new StructInfo(this.nextIndex++, type.typeName);
            // TODO populate parents, attributes and fields
            this.structInfos.set(type.typeName, info);
            this.typeInfos.push(info);
        }
        return this.structInfos.get(type.typeName);
    }

    getClassTypeInfo(_context: Context, type: IType): ClassInfo {
        if(!this.classInfos.has(type.typeName)) {
            const info = new ClassInfo(this.nextIndex++, type.typeName);
            // TODO populate parents, interfaces, attributes, fields and methods
            this.classInfos.set(type.typeName, info);
            this.typeInfos.push(info);
        }
        return this.classInfos.get(type.typeName);
    }

    getArrayTypeInfo(context: Context, elementType: IType): ArrayInfo {
        if(!this.arrayInfos.has(elementType.typeName)) {
            const elemInfo = elementType.asTypeInfo(context);
            const arrayInfo = new ArrayInfo(this.nextIndex++, elemInfo);
            this.arrayInfos.set(elementType.typeName, arrayInfo);
            this.typeInfos.push(arrayInfo);
        }
        return this.arrayInfos.get(elementType.typeName);
    }



}
