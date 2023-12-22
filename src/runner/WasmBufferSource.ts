import IWasmSource from "./IWasmSource.ts";

export default class WasmBufferSource implements IWasmSource {

    readonly path = "<memory>";
    bytes: ArrayBuffer

    constructor(bytes: ArrayBuffer) {
        this.bytes = bytes;
    }

    get length(): number {
        return this.bytes.byteLength;
    }

    compile(): WebAssembly.Module {
        return new WebAssembly.Module(this.bytes);
    }
}
