import SectionType from "./SectionType";
import SectionBase from "./SectionBase";
import IWasmTarget from "../compiler/IWasmTarget";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import LEB128 from "../utils/LEB128";
import Variable from "../context/Variable";

enum ExportType {
    FUNCTION,
    TABLE,
    MEMORY,
    GLOBAL
}


interface IExport {
    name: string;
    type: ExportType;
    get length(): number;
    writeTo(target: IWasmTarget): void;
}

abstract class ExportBase implements IExport {

    name: string;
    abstract get type(): ExportType;
    abstract get contentLength(): number;
    abstract writeContentTo(target: IWasmTarget): void;

    constructor(name: string) {
        this.name = name;
    }

    get length(): number {
        return LEB128.unsignedLength(this.name.length) + this.name.length + 1 + this.contentLength;
    }

    writeTo(target: IWasmTarget): void {
        target.writeString(this.name);
        target.writeUInts(this.type);
        this.writeContentTo(target);
    }
}

class FunctionExport extends ExportBase {

    index: number

    constructor(name: string, index: number) {
        super(name);
    }

    get type(): ExportType {
        return ExportType.FUNCTION;
    }

    get contentLength(): number {
        return LEB128.unsignedLength(this.index);
    }

    writeContentTo(target: IWasmTarget): void {
        target.writeUInts(this.index);
    }
}

class GlobalExport extends ExportBase {

    index: number

    constructor(name: string, index: number) {
        super(name);
    }

    get type(): ExportType {
        return ExportType.GLOBAL;
    }

    get contentLength(): number {
        return LEB128.unsignedLength(this.index);
    }

    writeContentTo(target: IWasmTarget): void {
        target.writeUInts(this.index);
    }
}


export default class ExportsSection extends SectionBase {

    exports: IExport[] = [];

    get type(): SectionType {
        return SectionType.EXPORTS;
    }

    get length(): number {
        return LEB128.unsignedLength(this.exports.length)
            + this.exports.map(x => x.length).reduce((p, v) => p + v, 0);
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeUInts(this.exports.length);
        this.exports.forEach(x => x.writeTo(target));
    }

    exportFunction(function_: IFunctionDeclaration, functionIndex: number) {
        this.exports.push(new FunctionExport(function_.name, functionIndex));
    }

    exportGlobal(variable: Variable, globalIndex: number) {
        this.exports.push(new GlobalExport(variable.name, globalIndex));
    }
}
