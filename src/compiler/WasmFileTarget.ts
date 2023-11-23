import IWasmSource from "../runner/IWasmSource";
import WasmTargetBase from "./WasmTargetBase";
import WasmFileSource from "../runner/WasmFileSource";
import fs from "fs";
import assert from "assert";

export default class WasmFileTarget extends WasmTargetBase {

    targetPath: string;
    file = -1;

    constructor(targetPath: string) {
        super();
        this.targetPath = targetPath;
    }

    open(): void {
        assert(this.file == -1);
        this.file = fs.openSync(this.targetPath, "w");
    }

    close(): void {
        assert(this.file != -1);
        fs.close(this.file);
        this.file = -1;
    }

    asWasmBuffer(): Uint8Array {
        return fs.readFileSync(this.targetPath);
    }

    asWasmSource(): IWasmSource {
        return new WasmFileSource(this.targetPath);
    }

    writeUint8Array(uint8s: Uint8Array): void {
        fs.writeFileSync(this.file, uint8s, "binary");

    }

};
