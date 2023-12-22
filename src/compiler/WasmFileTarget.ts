import WasmTargetBase from "./WasmTargetBase.ts";
import WasmFileSource from "../runner/WasmFileSource.ts";

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

    asWasmSource(): WasmFileSource {
        return new WasmFileSource(this.targetPath);
    }

    writeUint8Array(uint8s: Uint8Array): void {
        fs.writeFileSync(this.file, uint8s, "binary");

    }

};
