import CustomSection from "../module/CustomSection";
import LEB128 from "../utils/LEB128";
import IWasmTarget from "../compiler/IWasmTarget";

export default class DebugInfoSection extends CustomSection {

    static readonly NAME = ".debug_info";

    get name() : string {
        return DebugInfoSection.NAME;
    }

    get byteLength(): number {
        return LEB128.unsignedLength(this.name.length) + this.name.length;
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeString(this.name);
    }

}
