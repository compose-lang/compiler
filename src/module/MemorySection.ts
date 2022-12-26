import SectionType from "./SectionType";
import IWasmTarget from "../compiler/IWasmTarget";
import SectionBase from "./SectionBase";
import LEB128 from "../utils/LEB128";

class Memory {

    minPages: number;
    maxPages?: number;

    constructor(minPages: number = 0, maxPages?: number) {
        this.minPages = minPages;
        this.maxPages = maxPages;
    }

    byteLength() {
        return 1 /* flags */ + LEB128.unsignedLength(this.minPages) + (this.maxPages == undefined ? 0 : LEB128.unsignedLength(this.maxPages));
    }

    writeTo(target: IWasmTarget) {
        if(this.maxPages == undefined)
            target.writeUInts(0, this.minPages);
        else
            target.writeUInts(1, this.minPages, this.maxPages);
    }
}

export default class MemorySection extends SectionBase {

    memories: Memory[] = [];

    get type(): SectionType {
        return SectionType.MEMORY;
    }

    get length(): number {
        return LEB128.unsignedLength(this.memories.length)
            + this.memories.map(mem => mem.byteLength()).reduce((p, v) => p + v, 0);
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeUInts(this.memories.length);
        this.memories.forEach(mem => mem.writeTo(target))
    }

    addMemory(minPages: number, maxPages?: number) {
        this.memories.push(new Memory(minPages, maxPages));
        return this.memories.length - 1; // O-based index
    }

}
