import IDwarfTarget from "./IDwarfTarget";
import WasmModule from "../module/WasmModule";
import CustomSection from "../module/CustomSection";
import ExternalDebugSection from "../module/ExternalDebugSection";

export default class DwarfFileTarget implements IDwarfTarget {

    readonly dwarfPath: string;

    constructor(dwarfPath: string, sourcePath: string) {
        this.dwarfPath = dwarfPath;
    }

    createCustomSections(module: WasmModule): CustomSection[] {
        const section = module.getOrCreateCustomSection(ExternalDebugSection.NAME, () => new ExternalDebugSection(this.dwarfPath));
        return [ section ];
    }
}
