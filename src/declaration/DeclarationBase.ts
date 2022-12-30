import CodeFragment from "../builder/CodeFragment";
import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import Context from "../context/Context";
import Annotation from "../builder/Annotation";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import ExportType from "../compiler/ExportType";
import CompilationUnit from "../compiler/CompilationUnit";

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

    get unit() {
        return this._unit;
    }

    set unit(unit: CompilationUnit ) {
        this._unit = unit;
    }

    isModuleExport() {
        return this.annotations && this.annotations.some(a => a.name === "@ModuleExport");
    }

    abstract register(context: Context): void;
    abstract check(context: Context): IType;
    declare(context: Context, module: WasmModule): void {
        // nothing to do
    }

}
