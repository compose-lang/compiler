import LEB128 from "../utils/LEB128";
import IWasmTarget from "../compiler/IWasmTarget";
import CustomSection from "../module/CustomSection";

export default class ExternalDebugSection extends CustomSection {

    static readonly NAME = "external_debug_info";

    readonly dwarfPath: string;

    constructor(dwarfPath: string) {
        super();
        this.dwarfPath = dwarfPath;
    }

    get name() : string {
        return ExternalDebugSection.NAME;
    }

    get byteLength(): number {
        return LEB128.unsignedLength(this.name.length) + this.name.length + LEB128.unsignedLength(this.dwarfPath.length) + this.dwarfPath.length;
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeString(this.name);
        target.writeString(this.dwarfPath);
    }

}
