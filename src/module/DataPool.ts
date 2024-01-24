import MemorySegment from "./MemorySegment.ts";

export default class DataPool {

    private readonly segments: MemorySegment[] = [];

    add(buffer: Uint8Array): MemorySegment {
        const length = this.segments.length;
        const offset = length > 0 ? this.segments[length - 1].offset : 0;
        const segment = new MemorySegment("$" + length, offset, buffer);
        this.segments.push(segment);
        return segment;
    }

}
