import WasmTargetBase from "./WasmTargetBase";
import WasmBufferSource from "../runner/WasmBufferSource";

export default class WasmBufferTarget extends WasmTargetBase {

    buffers: Uint8Array[] = [];

    open(): void {
        // nothing to do
    }

    close(): void {
        // nothing to do
    }

    asWasmBuffer(): Uint8Array {
        const length = this.buffers.map(b => b.length).reduce((p,v) => p + v, 0);
        const buffer = new Uint8Array(length);
        let offset = 0;
        this.buffers.forEach(b => {
            buffer.set(b, offset);
            offset += b.length;
        });
        return buffer;
    }

    asWasmSource(): WasmBufferSource {
        const buffer = this.asWasmBuffer();
        return new WasmBufferSource(buffer);
    }

    writeUint8Array(uint8s: Uint8Array): void {
        this.buffers.push(uint8s);
    }


}
