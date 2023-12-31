import {stringToArrayBuffer} from "../../utils/StringUtils.ts";
import os from "node:os";
import fs from "node:fs";
import paths from "node:path";

export function fileExistsSync(path: string) {
    return fs.existsSync(path);
}

export function statSync(path: string) {
    const stats = fs.statSync(path);
    return Object.assign(stats, {
        isFile: () => stats.isFile
    });
}

export function openFileSync(path: string, options: Deno.OpenOptions) {
    /* TODO convert OpenOptions to flags
    'a': Open file for appending. The file is created if it does not exist.
    'ax': Like 'a' but fails if the path exists.
    'a+': Open file for reading and appending. The file is created if it does not exist.
    'ax+': Like 'a+' but fails if the path exists.
    'as': Open file for appending in synchronous mode. The file is created if it does not exist.
    'as+': Open file for reading and appending in synchronous mode. The file is created if it does not exist.
    'r': Open file for reading. An exception occurs if the file does not exist.
    'rs': Open file for reading in synchronous mode. An exception occurs if the file does not exist.
    'r+': Open file for reading and writing. An exception occurs if the file does not exist.
    'rs+': Open file for reading and writing in synchronous mode. Instructs the operating system to bypass the local file system cache.
    'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
    'wx': Like 'w' but fails if the path exists.
    'w+': Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
    'wx+': Like 'w+' but fails if the path exists.
    */
    return fs.openSync(path, undefined, options.mode);
}

export function closeFileSync(file: Deno.FsFile) {
    return fs.close(file.rid);
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
    fs.writeSync(file.rid, ui8s);
}

export function readFileSync(file: Deno.FsFile, buffer: Uint8Array) {
    return fs.readSync(file.rid, buffer);
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
    fs.writeFileSync(path, ui8s, options);
}

export function readPathSync(path: string) {
    return fs.readFileSync(path); // TODO options
}

export function dirname(path: string): string {
    return paths.dirname(path);
}

export function filename(path: string): string {
    return paths.basename(path, paths.extname(path));
}


export function tmpdir(): string {
    const tmpDir = os.tmpdir();
    return fs.mkdtempSync(`${tmpDir}${paths.sep}`)
}
