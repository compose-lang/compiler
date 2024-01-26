import DataPool, {IndexedSegmentInfo} from "./DataPool.ts";

export default class StringPool {

    private readonly dataPool: DataPool;
    private readonly values = new Map<string, IndexedSegmentInfo>();

    constructor(dataPool: DataPool) {
        this.dataPool = dataPool;
    }

    public add(value: string): [ number, number, number ] {
        if(!this.values.has(value)) {
            const encoder = new TextEncoder();
            const bytes = encoder.encode(value);
            const segment = this.dataPool.add(bytes, true);
            this.values.set(value, segment);
        }
        const segment = this.values.get(value);
        return [ segment.index, segment.offset, segment.data.length ];
    }
}
