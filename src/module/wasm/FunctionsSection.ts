import SectionType from "./SectionType";
import IWasmTarget from "../../compiler/IWasmTarget";
import SectionBase from "./SectionBase";
import LEB128 from "../../utils/LEB128";

export default class FunctionsSection extends SectionBase {

    functionTypes: number[] = [];

    get type(): SectionType {
        return SectionType.FUNCTIONS;
    }

    get byteLength(): number {
        return LEB128.unsignedLength(this.functionTypes.length)
            + this.functionTypes.map(idx => LEB128.unsignedLength(idx)).reduce((p, v) => p + v, 0);
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeUInts(this.functionTypes.length);
        target.writeUIntsArray(this.functionTypes);
    }

    addFunction(typeIndex: number) {
        this.functionTypes.push(typeIndex);
        return this.functionTypes.length - 1; // O-based index
    }

}
