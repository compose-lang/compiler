import { importFsIfNode, importFsIfDeno } from './ImportUtils.ts';

const fs : null | typeof import("node:fs") = importFsIfNode() as unknown as typeof import("node:fs");
const mod : null | typeof import("https://deno.land/std@0.209.0/fs/mod.ts") = importFsIfDeno() as unknown as typeof import("https://deno.land/std@0.209.0/fs/mod.ts");
const _fileExists: (path: string) => boolean = fs ? fs.existsSync : mod ? mod.existsSync : (path) => false;

export function fileExists(path: string) {
    return _fileExists(path);
}

