import IWasmSource from "./IWasmSource.ts";
import {MEMORY_BLOB_URL} from "../utils/Constants.ts";

export default class WasmBufferSource implements IWasmSource {

    readonly url = MEMORY_BLOB_URL;
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
