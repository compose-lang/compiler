import IWasmTarget from "../compiler/IWasmTarget";
import ISection from "./ISection";
import SectionType from "./SectionType";
import TypesSection from "./TypesSection";
import FunctionsSection from "./FunctionsSection";
import ExportsSection from "./ExportsSection";
import CodeSection from "./CodeSection";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import ICompilable from "../compiler/ICompilable";
import IExpression from "../expression/IExpression";
import GlobalsSection from "./GlobalsSection";
import Variable from "../context/Variable";
import Global from "./Global";

export default class WasmModule {

    sections = new Map<SectionType, ISection>();
    functions: ICompilable[] = [];
    globals: Global[] = [];

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

    declareGlobal(variable: Variable, value: IExpression, exported: boolean) {
        // TODO check unique
        const global = new Global(variable, value);
        const globalIndex = this.getGlobalsSection().addGlobal(global);
        this.globals[globalIndex] = global;
        if(exported) {
            this.getExportsSection().exportGlobal(variable, globalIndex);
        }
    }

    declareFunction(function_: IFunctionDeclaration, exported = false) {
        // TODO check unique
        const typeIndex = this.getTypesSection().addType(function_.type());
        const functionIndex = this.getFunctionsSection().addFunction(typeIndex);
        this.functions[functionIndex] = function_ as unknown as ICompilable;
        if(exported) {
            this.getExportsSection().exportFunction(function_, functionIndex);
        }
    }

    getTypesSection(): TypesSection {
        return this.getOrCreateSection(TypesSection, SectionType.TYPES);
    }

    getFunctionsSection(): FunctionsSection {
        return this.getOrCreateSection(FunctionsSection, SectionType.FUNCTIONS);
    }

    getGlobalsSection(): GlobalsSection {
        return this.getOrCreateSection(GlobalsSection, SectionType.GLOBALS);
    }

    getExportsSection(): ExportsSection {
        return this.getOrCreateSection(ExportsSection, SectionType.EXPORTS);
    }

    getCodeSection(): CodeSection {
        return this.getOrCreateSection(CodeSection, SectionType.CODE);
    }

    private getOrCreateSection<T extends ISection>(section: { new(): T; }, type: SectionType): T {
        if(!this.sections.has(type))
            this.sections.set(type, new section());
        return this.sections.get(type) as T;
    }

}
