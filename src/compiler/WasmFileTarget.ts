import IWasmSource from "../runner/IWasmSource";
import WasmTargetBase from "./WasmTargetBase";
import * as assert from "assert";

export default class WasmFileTarget extends WasmTargetBase {

    targetPath: string;

    constructor(targetPath: string) {
        super();
        this.targetPath = targetPath;
    }

    asWasmBuffer(): Uint8Array {
        assert.ok(false); // TODO
    }

    asWasmSource(): IWasmSource {
        assert.ok(false); // TODO
    }

    writeBytesArray(bytes: number[]): void {
        assert.ok(false); // TODO
    }

    writeUint8Array(bytes: Uint8Array): void {
        assert.ok(false); // TODO
    }

};
