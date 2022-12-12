import { importFsIfNode } from './ImportUtils';

const fs : null | typeof import("fs") = importFsIfNode() as unknown as typeof import("fs");
const _fileExists: (path: string) => boolean = fs ? fs.existsSync : (path: string) => false;

export function fileExists(path: string) {
    return _fileExists(path);
}
