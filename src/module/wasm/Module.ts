import IWasmTarget from "../../compiler/IWasmTarget";
import ISection from "./ISection";
import SectionType from "./SectionType";
import TypesSection from "./TypesSection";
import FunctionsSection from "./FunctionsSection";
import ExportsSection from "./ExportsSection";
import CodeSection from "./CodeSection";
import IFunctionDeclaration from "../../declaration/IFunctionDeclaration";
import ICompilable from "../../compiler/ICompilable";
import IExpression from "../../expression/IExpression";
import GlobalsSection from "./GlobalsSection";
import Variable from "../../context/Variable";
import Global from "./Global";
import MemorySection from "./MemorySection";
import CompilationUnit from "../../compiler/CompilationUnit";
import ImportsSection from "./ImportsSection";
import * as assert from "assert";
import CustomSection from "./CustomSection";
import DebugInfo from "../../debug/DebugInfo";

export default class Module {

    standardSections = new Map<SectionType, ISection>();
    customSections = new Map<string, CustomSection>();
    debugInfo = new DebugInfo(this);
    functions: ICompilable[] = [];
    globals: Global[] = [];

    writeTo(wasmTarget: IWasmTarget) {
        wasmTarget.open();
        Module.writeMagicBytes(wasmTarget);
        Module.writeVersion(wasmTarget);
        Object.values(SectionType).forEach((s: SectionType) => {
            if(s==SectionType.CUSTOM) {
                this.customSections.forEach(s => {
                    s.writeTo(wasmTarget);
                })
            }
            if(this.standardSections.has(s))
                this.standardSections.get(s).writeTo(wasmTarget);
        })
        wasmTarget.close();
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
        assert.ok(!this.standardSections.has(SectionType.FUNCTIONS));
        const typeIndex = this.getTypesSection().addType(decl.functionType());
        const functionIndex = this.getImportsSection().importFunction(decl, typeIndex);
        this.functions[functionIndex] = decl as unknown as ICompilable;
    }

    declareConcreteFunction(decl: IFunctionDeclaration, exported: boolean) {
        const typeIndex = this.getTypesSection().addType(decl.functionType());
        let functionIndex = this.getFunctionsSection().addFunction(typeIndex);
        if(this.standardSections.has(SectionType.IMPORTS))
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
        if(!this.standardSections.has(type))
            this.standardSections.set(type, new section());
        return this.standardSections.get(type) as T;
    }

    getOrCreateCustomSection<T extends CustomSection>(name: string, ctor: () => T): T {
        if(!this.customSections.has(name))
            this.customSections.set(name, ctor())
        return this.customSections.get(name) as T;
    }

}
