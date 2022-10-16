export function isNodeJs() {
    return typeof window == 'undefined' && typeof importScripts == 'undefined';
}

let path: typeof import("path") | null = null;
let fs: typeof import("fs") | null = null;

if(isNodeJs()) {
    import(/* webpackMode: "weak" */"fs").then(module => fs = module, reason => console.log(reason));
    import(/* webpackMode: "weak" */"path").then(module => path = module, reason => console.log(reason));
}

export function importPathIfNode(): typeof import("path") | null {
    return path;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function importFsIfNode(): typeof import("fs") | null {
    return fs;
}

