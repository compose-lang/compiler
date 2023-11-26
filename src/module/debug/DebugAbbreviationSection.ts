import CustomSection from "../wasm/CustomSection";
import LEB128 from "../../utils/LEB128";
import IWasmTarget from "../../compiler/IWasmTarget";

export default class DebugAbbreviationSection extends CustomSection {

    static readonly NAME = ".debug_abbrev";

    get name() : string {
        return DebugAbbreviationSection.NAME;
    }

    get byteLength(): number {
        return LEB128.unsignedLength(this.name.length) + this.name.length;
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeString(this.name);
    }

}
