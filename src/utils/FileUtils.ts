import {stringToArrayBuffer} from "./StringUtils.ts";
import * as fs from "https://deno.land/std@0.209.0/fs/mod.ts";
import * as paths from "https://deno.land/std@0.209.0/path/mod.ts";

export function fileExistsSync(path: string) {
    return fs.existsSync(path);
}

export function statSync(path: string) {
    const stats = Deno.statSync(path);
    return Object.assign(stats, {
        isFile: () => stats.isFile
    });
}

// deno-lint-ignore no-explicit-any
type ReadFileOptions = Record<string, any>;
// deno-lint-ignore no-explicit-any
type WriteFileOptions = Record<string, any>;
type WriteFileData = string | Uint8Array;

export function writeFileSync(path: string, data: WriteFileData, options?: WriteFileOptions) {
    let ui8s: Uint8Array;
    if(typeof(data) == "string") {
        const buffer = stringToArrayBuffer(data);
        ui8s = new Uint8Array(buffer);
    } else if(data instanceof Uint8Array)
        ui8s = data;
    else
        throw new Error("Should never get there!");
    Deno.writeFileSync(path, ui8s, options);
}

export function readFileSync(path: string, options?: ReadFileOptions) {
    return Deno.readFileSync(path); // TODO options
}

export function dirname(path: string): string {
    return paths.dirname(path);
}

export function filename(path: string): string {
    return paths.basename(path, paths.extname(path));
}


export function tmpdir(): string {
    return Deno.makeTempDirSync();
}
