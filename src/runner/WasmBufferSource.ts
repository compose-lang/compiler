import IWasmSource from "./IWasmSource";

export default class WasmBufferSource implements IWasmSource {

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
