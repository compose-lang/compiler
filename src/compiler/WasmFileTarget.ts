import WasmTargetBase from "./WasmTargetBase.ts";
import WasmFileSource from "../runner/WasmFileSource.ts";
import { assertTrue } from "../../deps.ts";
import { writeFileSync, openFileSync, closeFileSync, readPathSync } from "../platform/deno/FileUtils.ts";
import {fileURLToPath} from "../platform/deno/URLUtils.ts";

export default class WasmFileTarget extends WasmTargetBase {

    targetURL: URL;
    file: Deno.FsFile;

    constructor(targetURL: URL) {
        super();
        this.targetURL = targetURL;
    }

    open(): void {
        assertTrue(!this.file);
        const path = fileURLToPath(this.targetURL.toString());
        this.file = openFileSync(path, { write: true, create: true, truncate: true });
    }

    close(): void {
        assertTrue(this.file);
        closeFileSync(this.file);
        this.file = null;
    }

    asWasmBuffer(): Uint8Array {
        const path = fileURLToPath(this.targetURL.toString());
        return readPathSync(path);
    }

    asWasmSource(): WasmFileSource {
        return new WasmFileSource(this.targetURL);
    }

    writeUint8Array(uint8s: Uint8Array): void {
        writeFileSync(this.file, uint8s);

    }

};
