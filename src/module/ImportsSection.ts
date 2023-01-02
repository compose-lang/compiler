import SectionBase from "./SectionBase";
import SectionType from "./SectionType";
import LEB128 from "../utils/LEB128";
import IWasmTarget from "../compiler/IWasmTarget";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";

enum ImportType {
    FUNCTION,
    TABLE,
    MEMORY,
    GLOBAL
}


interface IImport {
    name: string;
    type: ImportType;
    get length(): number;
    writeTo(target: IWasmTarget): void;
}

abstract class ImportBase implements IImport {

    module: string;
    name: string;
    abstract get type(): ImportType;
    abstract get contentLength(): number;
    abstract writeContentTo(target: IWasmTarget): void;

    constructor(module: string, name: string) {
        this.module = module;
        this.name = name;
    }

    get length(): number {
        return LEB128.unsignedLength(this.module.length) + this.module.length + LEB128.unsignedLength(this.name.length) + this.name.length + 1 + this.contentLength;
    }

    writeTo(target: IWasmTarget): void {
        target.writeString(this.module);
        target.writeString(this.name);
        target.writeUInts(this.type);
        this.writeContentTo(target);
    }
}

class FunctionImport extends ImportBase {

    index: number

    constructor(module: string, name: string, index: number) {
        super(module, name);
        this.index = index;
    }

    get type(): ImportType {
        return ImportType.FUNCTION;
    }

    get contentLength(): number {
        return LEB128.unsignedLength(this.index);
    }

    writeContentTo(target: IWasmTarget): void {
        target.writeUInts(this.index);
    }
}


export default class ImportsSection extends SectionBase {

    imports: IImport[] = [];

    get type(): SectionType {
        return SectionType.IMPORTS;
    }

    get byteLength(): number {
        return LEB128.unsignedLength(this.imports.length)
            + this.imports.map(x => x.length).reduce((p, v) => p + v, 0);
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeUInts(this.imports.length);
        this.imports.forEach(x => x.writeTo(target));
    }

    importFunction(function_: IFunctionDeclaration, functionIndex: number) {
        const module = function_.getModuleImportName();
        const name = function_.name;
        this.imports.push(new FunctionImport(module, name, functionIndex));
        return this.countFunctions() - 1; // 0-based index
    }

    countFunctions() {
        return this.imports.filter(i => i instanceof FunctionImport).length;
    }
}
