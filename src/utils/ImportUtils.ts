declare var importScripts: Function;

export function isNodeJs() {
    return typeof window == 'undefined' && typeof importScripts == 'undefined';
}

export function isDeno() {
    return "Deno" in window;
}

let node_path: typeof import("node:path") | null = null;
let node_fs: typeof import("node:fs") | null = null;
let node_url: typeof import("node:url") | null = null;
let node_os: typeof import("node:os") | null = null;

if(isNodeJs()) {
    node_fs = await import(/* webpackMode: "weak" */"node:fs");
    node_path = await import(/* webpackMode: "weak" */"node:path");
    node_url = await import(/* webpackMode: "weak" */"node:url");
    node_os = await import(/* webpackMode: "weak" */"node:os");
}

export function importPathIfNode() {
    return node_path;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function importFsIfNode() {
    return node_fs;
}

export function importUrlIfNode() {
    return node_url;
}

export function importOsIfNode() {
    return node_os;
}

let deno_path: typeof import("https://deno.land/std@0.209.0/path/mod.ts") | null = null;
let deno_fs: typeof import("https://deno.land/std@0.209.0/fs/mod.ts") | null = null;
let deno_url: typeof import("https://deno.land/std@0.83.0/node/url.ts") | null = null;
let deno_os: typeof import("https://deno.land/std@0.83.0/node/os.ts") | null = null;

if(isDeno()) {
    deno_path = await import("https://deno.land/std@0.209.0/path/mod.ts");
    deno_fs = await import("https://deno.land/std@0.209.0/fs/mod.ts");
    deno_url = await import("https://deno.land/std@0.83.0/node/url.ts");
    deno_os = await import("https://deno.land/std@0.83.0/node/os.ts");
}


export function importPathIfDeno() {
    return deno_path;
}
export function importFsIfDeno() {
    return deno_fs;
}

export function importUrlIfDeno() {
    return deno_url;
}

export function importOsIfDeno() {
    return deno_os;
}

