import WasmModule from "../module/WasmModule";
import ExternalDebugSection from "./ExternalDebugSection";
import IDwarfTarget from "./IDwarfTarget";
import DwarfInternalTarget from "./DwarfInternalTarget";
import WasmFileTarget from "../compiler/WasmFileTarget";

export default class DebugInfo {

    readonly sourceModule: WasmModule;

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

    }
}
