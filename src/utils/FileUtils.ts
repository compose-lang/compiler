import { isNodeJs, isDeno, importOsIfNode, /*importOsIfDeno, */importFsIfNode, importFsIfDeno, importPathIfNode, importPathIfDeno } from './ImportUtils.ts';
import {stringToArrayBuffer} from "./StringUtils.ts";

const node_fs = importFsIfNode();
const deno_fs = importFsIfDeno();

const node_path = importPathIfNode();
const deno_path = importPathIfDeno();

const node_os = importOsIfNode();
// const deno_os = importOsIfDeno();

export function fileExistsSync(path: string) {
    if(isNodeJs())
        return node_fs.existsSync(path);
    else if (isDeno())
        return deno_fs.existsSync(path);
    else
        throw new Error("Should never get there!")
}

export function statSync(path: string) {
    if(isNodeJs())
        return node_fs.statSync(path);
    else if (isDeno()) {
        const stats = Deno.statSync(path);
        return Object.assign(stats, {
            isFile: () => stats.isFile
        });
    } else
        throw new Error("Should never get there!")
}

// deno-lint-ignore no-explicit-any
type ReadFileOptions = Record<string, any>;
// deno-lint-ignore no-explicit-any
type WriteFileOptions = Record<string, any>;
type WriteFileData = string | Uint8Array;

export function writeFileSync(path: string, data: WriteFileData, options?: WriteFileOptions) {
    if(isNodeJs()) {
        // deno-lint-ignore no-explicit-any
        node_fs.writeFileSync(path, data as any, options);
    } else if(isDeno()) {
        let ui8s: Uint8Array;
        if(typeof(data) == "string") {
            const buffer = stringToArrayBuffer(data);
            ui8s = new Uint8Array(buffer);
        } else if(data instanceof Uint8Array)
            ui8s = data;
        else
            throw new Error("Should never get there!");
        Deno.writeFileSync(path, ui8s, options);
    } else
        throw new Error("Should never get there!")
}

export function readFileSync(path: string, options?: ReadFileOptions) {
    if(isNodeJs()) {
        return node_fs.readFileSync(path, options);
    } else if(isDeno()) {
        return Deno.readFileSync(path); // TODO options
    } else
        throw new Error("Should never get there!")
}

export function dirname(path: string): string {
    if(isNodeJs())
        return node_path.dirname(path);
    else if(isDeno())
        return deno_path.dirname(path);
    else
        throw new Error("Should never get there!")
}

export function filename(path: string): string {
    if(isNodeJs())
        return node_path.basename(path, node_path.extname(path));
    else if(isDeno())
        return deno_path.basename(path, deno_path.extname(path));
    else
        throw new Error("Should never get there!")
}


export function tmpdir(): string {
    if(isNodeJs())
        return node_os.tmpdir();
    else if(isDeno())
        return Deno.makeTempDirSync();
    else
        throw new Error("Should never get there!")
}
