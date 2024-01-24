import MemorySegment from "./MemorySegment.ts";
import DataPool from "./DataPool.ts";

export default class StringPool {

    private readonly dataPool: DataPool;
    private readonly values = new Map<string, MemorySegment>();

    constructor(dataPool: DataPool) {
        this.dataPool = dataPool;
    }

    public add(value: string): [string, number] {
        if(!this.values.has(value)) {
            const encoder = new TextEncoder();
            const bytes = encoder.encode(value);
            const segment = this.dataPool.add(bytes);
            this.values.set(value, segment);
        }
        const segment = this.values.get(value);
        return [segment.name, segment.size];
    }
}
