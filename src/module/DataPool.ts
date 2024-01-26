import WasmModule from "./WasmModule.ts";
import {SegmentInfo} from "../binaryen/binaryen_wasm.d.ts";

export interface IndexedSegmentInfo extends SegmentInfo {
    index: number;
}
export default class DataPool {
    private readonly segments: IndexedSegmentInfo[] = [];

    add(data: Uint8Array, passive: boolean): IndexedSegmentInfo {
        const length = this.segments.length;
        const offset = length > 0 ? this.segments[length - 1].offset : 0;
        const segment = { offset, data, passive, index: length };
        this.segments.push(segment);
        return segment;
    }

    compile(module: WasmModule) {
        if(this.segments.length == 0)
            module.memory.set(1, -1);
        else {
            const segments = this.segments.map(segment => Object.assign({}, segment, { offset: segment.passive ? 0 : module.i32.const(segment.offset) }))
            module.memory.set(1, -1, null, segments, false, false, "data");
        }
    }

}
