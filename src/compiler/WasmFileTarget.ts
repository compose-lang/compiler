import WasmTargetBase from "./WasmTargetBase.ts";
import WasmFileSource from "../runner/WasmFileSource.ts";
import { assert } from "../../deps.ts";
import { writeFileSync, openFileSync, closeFileSync, readPathSync } from "../utils/FileUtils.ts";

export default class WasmFileTarget extends WasmTargetBase {

    targetPath: string;
    file: Deno.FsFile;

    constructor(targetPath: string) {
        super();
        this.targetPath = targetPath;
    }

    open(): void {
        assert(!this.file);
        this.file = openFileSync(this.targetPath, { write: true, create: true, truncate: true });
    }

    close(): void {
        assert(this.file);
        closeFileSync(this.file);
        this.file = null;
    }

    asWasmBuffer(): Uint8Array {
        return readPathSync(this.targetPath);
    }

    asWasmSource(): WasmFileSource {
        return new WasmFileSource(this.targetPath);
    }

    writeUint8Array(uint8s: Uint8Array): void {
        writeFileSync(this.file, uint8s);

    }

};
