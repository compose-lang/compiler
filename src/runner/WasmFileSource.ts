import { readPathSync, statSync } from "../platform/deno/FileUtils.ts";
import IWasmSource from "./IWasmSource.ts";
import {fileURLToPath} from "../platform/deno/URLUtils.ts";

export default class WasmFileSource implements IWasmSource {

    readonly url: URL;

    constructor(url: URL) {
        this.url = url;
    }

    get length(): number {
        const path = fileURLToPath(this.url.toString());
        const stats = statSync(path);
        if ( stats.isFile )
            return stats.size;
        else
            throw new Error("No such file: " + path);
    }

    compile(): WebAssembly.Module {
        const path = fileURLToPath(this.url.toString());
        const bytes = readPathSync(path)
        return new WebAssembly.Module(bytes);
    }
}
