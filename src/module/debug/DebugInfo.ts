import WasmModule from "../wasm/WasmModule";
import ExternalDebugSection from "./ExternalDebugSection";
import IDwarfTarget from "./IDwarfTarget";
import DwarfInternalTarget from "./DwarfInternalTarget";
import WasmFileTarget from "../../compiler/WasmFileTarget";
import DebugInfoSection from "./DebugInfoSection";
import CompilationUnit from "../../compiler/CompilationUnit";
import Dwarf_DIE from "./Dwarf_DIE";
import Dwarf_CU from "./Dwarf_CU";
import DebugAbbreviationSection from "./DebugAbbreviationSection";
import DebugSection from "./DebugSections";
import DebugLineSection from "./DebugLineSection";
import DebugStringSection from "./DebugStringSection";

export default class DebugInfo {

    readonly sourceModule: WasmModule;
    readonly dies: Dwarf_DIE[] = [];

    constructor(sourceModule: WasmModule) {
        this.sourceModule = sourceModule;
    }

    writeTo(target: IDwarfTarget, module: WasmModule) {
        if (target.isExternal())
            this.writeToExternalTarget(target, module);
        else
            this.writeToInternalTarget(target, module);
    }

    writeToExternalTarget(target: IDwarfTarget, module: WasmModule) {
        module.getOrCreateCustomSection(ExternalDebugSection.NAME, () => new ExternalDebugSection(target.externalPath()))
        const dwarfModule = new WasmModule();
        this.writeToInternalTarget(new DwarfInternalTarget(), dwarfModule);
        dwarfModule.writeTo(new WasmFileTarget(target.externalPath()));
    }

    writeToInternalTarget(target: IDwarfTarget, module: WasmModule) {
        const sections: DebugSection = {
            infoSection: module.getOrCreateCustomSection(DebugInfoSection.NAME, () => new DebugInfoSection()),
            abbreviationSection: module.getOrCreateCustomSection(DebugAbbreviationSection.NAME, () => new DebugAbbreviationSection()),
            lineSection: module.getOrCreateCustomSection(DebugLineSection.NAME, () => new DebugLineSection()),
            stringSection: module.getOrCreateCustomSection(DebugStringSection.NAME, () => new DebugStringSection())
        }
    }

    addUnit(unit: CompilationUnit) {
        this.dies.push(new Dwarf_CU(unit));
    }
}
