import CodeFragment from "../builder/CodeFragment.ts";
import IDeclaration from "./IDeclaration.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import Annotation from "../builder/Annotation.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import ExportType from "../compiler/ExportType.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";

export default abstract class DeclarationBase extends CodeFragment implements IDeclaration {

    _unit: CompilationUnit;
    annotations: Annotation[];
    exportType = ExportType.NONE;
    id: Identifier;

    protected constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    get fullName(): string {
        return this.id.value;
    }

    get unit() {
        return this._unit;
    }

    set unit(unit: CompilationUnit ) {
        this._unit = unit;
    }

    isModuleImport() {
        return this.annotations && this.annotations.some(a => a.name === "@ModuleImport");
    }

    isModuleExport() {
        return this.annotations && this.annotations.some(a => a.name === "@ModuleExport");
    }

    getModuleImportName() {
        const annotation = this.annotations.find(a => a.id.value == "@ModuleImport");
        return annotation.value.text.substring(1, annotation.value.text.length - 1);
    }

    abstract register(context: Context): void;
    abstract check(context: Context): IType;

    declare(context: Context, module: WasmModule): void {
        // nothing to do
    }

}
