import {stringToArrayBuffer} from "./StringUtils.ts";
let fs: typeof import("https://deno.land/std@0.209.0/fs/mod.ts");
let paths: typeof import("https://deno.land/std@0.209.0/path/mod.ts");
if(Deno) {
    fs = await import("https://deno.land/std@0.209.0/fs/mod.ts");
    paths = await import("https://deno.land/std@0.209.0/path/mod.ts");
}

export function fileExistsSync(path: string) {
    return fs.existsSync(path);
}

export function statSync(path: string) {
    const stats = Deno.statSync(path);
    return Object.assign(stats, {
        isFile: () => stats.isFile
    });
}

export function openFileSync(path: string, options: Deno.OpenOptions) {
    return Deno.openSync(path, options);
}

export function closeFileSync(file: Deno.FsFile) {
    return Deno.close(file.rid);
}

export function writeFileSync(file: Deno.FsFile, data: WriteFileData) {
    let ui8s: Uint8Array;
    if(typeof(data) == "string") {
        const buffer = stringToArrayBuffer(data);
        ui8s = new Uint8Array(buffer);
    } else if(data instanceof Uint8Array)
        ui8s = data;
    else
        throw new Error("Should never get there!");
    Deno.writeSync(file.rid, ui8s);
}

export function readFileSync(file: Deno.FsFile, buffer: Uint8Array) {
    return Deno.readSync(file.rid, buffer);
}

// deno-lint-ignore no-explicit-any
type ReadFileOptions = Record<string, any>;
// deno-lint-ignore no-explicit-any
type WriteFileOptions = Record<string, any>;
type WriteFileData = string | Uint8Array;

export function writePathSync(path: string, data: WriteFileData, options?: WriteFileOptions) {
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

export function readPathSync(path: string) {
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
