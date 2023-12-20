declare var importScripts: Function;

export function isNodeJs() {
    return typeof window == 'undefined' && typeof importScripts == 'undefined';
}

export function isDeno() {
    return "Deno" in window;
}

let node_path: typeof import("node:path") | null = null;
let node_fs: typeof import("node:fs") | null = null;

if(isNodeJs()) {
    await import(/* webpackMode: "weak" */"node:fs").then(module => node_fs = module, reason => console.log(reason));
    await import(/* webpackMode: "weak" */"node:path").then(module => node_path = module, reason => console.log(reason));
}

export function importPathIfNode(): typeof import("node:path") | null {
    return node_path;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function importFsIfNode(): typeof import("node:fs") | null {
    return node_fs;
}

let deno_path: typeof import("https://deno.land/std@0.209.0/path/mod.ts") | null = null;
let deno_fs: typeof import("https://deno.land/std@0.209.0/fs/mod.ts") | null = null;

if(isDeno()) {
    await import("https://deno.land/std@0.209.0/path/mod.ts").then(module => deno_path = module, reason => console.log(reason));
    await import("https://deno.land/std@0.209.0/fs/mod.ts").then(module => deno_fs = module, reason => console.log(reason));
}


export function importPathIfDeno(): typeof import("https://deno.land/std@0.209.0/path/mod.ts") | null {
    return deno_path;
}
export function importFsIfDeno(): typeof import("https://deno.land/std@0.209.0/fs/mod.ts") | null {
    return deno_fs;
}
