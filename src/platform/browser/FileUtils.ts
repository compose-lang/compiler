const error = new Error("Files are not supported in browser!");

export function fileExistsSync(path: string) {
    throw error;
}

export function statSync(path: string) {
    throw error;
}

export function openFileSync(path: string, options: Deno.OpenOptions) {
    throw error;
}

export function closeFileSync(file: Deno.FsFile) {
    throw error;
}

export function writeFileSync(file: Deno.FsFile, data: WriteFileData) {
    throw error;
}

export function readFileSync(file: Deno.FsFile, buffer: Uint8Array) {
    throw error;
}

// deno-lint-ignore no-explicit-any
type ReadFileOptions = Record<string, any>;
// deno-lint-ignore no-explicit-any
type WriteFileOptions = Record<string, any>;
type WriteFileData = string | Uint8Array;

export function writePathSync(path: string, data: WriteFileData, options?: WriteFileOptions) {
    throw error;
}

export function readPathSync(path: string) {
    throw error;
}

export function dirname(path: string): string {
    throw error;
}

export function filename(path: string): string {
    throw error;
}


export function tmpdir(): string {
    throw error;
}
