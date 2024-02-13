import { readPathSync, statSync } from "../platform/deno/FileUtils.ts";
import IWasmSource from "./IWasmSource.ts";

export default class WasmFileSource implements IWasmSource {

    readonly path: string;

    constructor(path: string) {
        this.path = path;
    }

    get length(): number {
        const stats = statSync(this.path);
        if ( stats.isFile )
            return stats.size;
        else
            throw new Error("No such file: " + this.path);
    }

    compile(): WebAssembly.Module {
        const bytes = readPathSync(this.path)
        return new WebAssembly.Module(bytes);
    }
}
