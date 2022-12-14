import IWasmSource from "../runner/IWasmSource";
import WasmTargetBase from "./WasmTargetBase";
import WasmBufferSource from "../runner/WasmBufferSource";

export default class WasmBufferTarget extends WasmTargetBase {

    buffers: Uint8Array[] = [];

    asWasmSource(): IWasmSource {
        const buffer = this.asBuffer();
        return new WasmBufferSource(buffer);
    }

    writeBytesArray(bytes: number[]): void {
        this.buffers.push(new Uint8Array(bytes));
    }

    writeUint8Array(bytes: Uint8Array): void {
        this.buffers.push(bytes);
    }

    private asBuffer(): Uint8Array {
        const length = this.buffers.map(b => b.length).reduce((p,v) => p + v, 0);
        const buffer = new Uint8Array(length);
        let offset = 0;
        this.buffers.forEach(b => {
            buffer.set(b, offset);
            offset += b.length;
        });
        return buffer;
    }

}
