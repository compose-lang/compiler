import SectionType from "./SectionType";
import FunctionType from "../../type/FunctionType";
import IType from "../../type/IType";
import LEB128 from "../../utils/LEB128";
import SectionBase from "./SectionBase";
import IWasmTarget from "../../compiler/IWasmTarget";

export default class TypesSection extends SectionBase {

    types: IType[] = [];
    typesMap = new Map<string, number>();

    get type(): SectionType {
        return SectionType.TYPES;
    }

    get byteLength(): number {
        return LEB128.unsignedLength(this.types.length)
            + this.types.map(type => type.byteLength()).reduce((p,v) => p + v, 0);
    }

    writeContentsTo(target: IWasmTarget): void {
        LEB128.emitUnsigned(this.types.length, (byte: number) => target.writeBytes(byte));
        this.types.forEach(type => type.writeTo(target));
    }

    addType(type: IType): number {
        const typeName = type.typeName;
        if(this.typesMap.has(typeName))
            return this.typesMap.get(typeName);
        this.types.push(type);
        const typeIndex = this.types.length - 1; // index is 0-based
        this.typesMap.set(typeName,  typeIndex);
        return typeIndex;
    }

}
