import WasmModule from "../module/WasmModule";
import CustomSection from "../module/CustomSection";

export default interface IDwarfTarget {
    createCustomSections(module: WasmModule): CustomSection[];
}
