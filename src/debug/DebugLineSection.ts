import CustomSection from "../module/CustomSection";
import LEB128 from "../utils/LEB128";
import IWasmTarget from "../compiler/IWasmTarget";

export default class DebugLineSection extends CustomSection {

    static readonly NAME = ".debug_line";

    get name() : string {
        return DebugLineSection.NAME;
    }

    get byteLength(): number {
        return LEB128.unsignedLength(this.name.length) + this.name.length;
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeString(this.name);
    }

}
