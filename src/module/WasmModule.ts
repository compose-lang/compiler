import IWasmTarget from "../compiler/IWasmTarget";
import ISection from "./ISection";
import SectionType from "./SectionType";
import TypesSection from "./TypesSection";
import Prototype from "../declaration/Prototype";
import FunctionsSection from "./FunctionsSection";
import ExportsSection from "./ExportsSection";

export default class WasmModule {

    sections = new Map<SectionType, ISection>();

    writeTo(target: IWasmTarget) {
        WasmModule.writeMagicBytes(target);
        WasmModule.writeVersion(target);
        Object.values(SectionType).forEach((s: SectionType) => {
            if(this.sections.has(s))
                this.sections.get(s).writeTo(target);
        })
    }

    private static writeMagicBytes(target: IWasmTarget) {
        target.writeBytes(0);
        target.writeChars('a', 's', 'm')
    }

    private static writeVersion(target: IWasmTarget) {
        target.writeBytes(1, 0, 0, 0);
    }

    exportMethod(prototype: Prototype) {
        const typeIndex = this.getTypesSection().addMethodType(prototype);
        // const functionIndex = this.getFunctionsSection().addFunction(prototype, typeIndex);
        // TODO this.getExportsSection().addFunction(prototype, functionIndex);
    }

    getTypesSection(): TypesSection {
        return this.getOrCreateSection(TypesSection, SectionType.TYPES);
    }

    getFunctionsSection(): FunctionsSection {
        return this.getOrCreateSection(FunctionsSection, SectionType.FUNCTIONS);
    }

    getExportsSection(): ExportsSection {
        return this.getOrCreateSection(ExportsSection, SectionType.EXPORTS);
    }

    private getOrCreateSection<T extends ISection>(section: { new(): T; }, type: SectionType): T {
        if(!this.sections.has(type))
            this.sections.set(type, new section());
        return this.sections.get(type) as T;
    }

}
