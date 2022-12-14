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
import MemorySection from "./MemorySection";
import CompilationUnit from "../compiler/CompilationUnit";
import ImportsSection from "./ImportsSection";
import * as assert from "assert";

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

    declareGlobal(unit: CompilationUnit, variable: Variable, value: IExpression, exported: boolean) {
        // TODO check unique
        const global = new Global(unit, variable, value);
        const globalIndex = this.getGlobalsSection().addGlobal(global);
        this.globals[globalIndex] = global;
        if(exported) {
            this.getExportsSection().exportGlobal(variable, globalIndex);
        }
    }

    setGlobalValue(variable: Variable, value: IExpression) {
        const global = this.getGlobalsSection().getGlobal(variable.name);
        assert.ok(global);
        global.value = value;
    }

    declareImportedFunction(decl: IFunctionDeclaration) {
        assert.ok(!this.sections.has(SectionType.FUNCTIONS));
        const typeIndex = this.getTypesSection().addType(decl.functionType());
        const functionIndex = this.getImportsSection().importFunction(decl, typeIndex);
        this.functions[functionIndex] = decl as unknown as ICompilable;
    }

    declareConcreteFunction(decl: IFunctionDeclaration, exported: boolean) {
        const typeIndex = this.getTypesSection().addType(decl.functionType());
        let functionIndex = this.getFunctionsSection().addFunction(typeIndex);
        if(this.sections.has(SectionType.IMPORTS))
            functionIndex += this.getImportsSection().countFunctions();
        this.functions[functionIndex] = decl as unknown as ICompilable;
        if(exported) {
            this.getExportsSection().exportFunction(decl, functionIndex);
        }
    }

    getFunctionIndex(decl: IFunctionDeclaration): number {
        return this.functions.findIndex(d => {
            const d_ = d as unknown as IFunctionDeclaration;
            return d_ == decl || d_.prototype().equals(decl.prototype());
        });
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

    getImportsSection(): ImportsSection {
        return this.getOrCreateSection(ImportsSection, SectionType.IMPORTS);
    }

    getExportsSection(): ExportsSection {
        return this.getOrCreateSection(ExportsSection, SectionType.EXPORTS);
    }

    getCodeSection(): CodeSection {
        return this.getOrCreateSection(CodeSection, SectionType.CODE);
    }

    getMemorySection(): MemorySection {
        return this.getOrCreateSection(MemorySection, SectionType.MEMORY);
    }

    private getOrCreateSection<T extends ISection>(section: { new(): T; }, type: SectionType): T {
        if(!this.sections.has(type))
            this.sections.set(type, new section());
        return this.sections.get(type) as T;
    }



}
