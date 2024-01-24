export default class MemorySegment {
    name: string;
    offset: number;
    buffer: Uint8Array;

    constructor(name: string, offset: number, buffer: Uint8Array) {
        this.name = name;
        this.offset = offset;
        this.buffer = buffer;
    }

    get size() {
        return this.buffer.length
    }

}
