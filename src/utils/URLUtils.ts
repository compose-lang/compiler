import { isNodeJs, isDeno, importUrlIfNode, importUrlIfDeno } from './ImportUtils.ts';

const node_url = importUrlIfNode();
const deno_url = importUrlIfDeno();

export function fileURLToPath(path: string) {
    if(isNodeJs())
        return node_url.fileURLToPath(path);
    else if (isDeno())
        return deno_url.fileURLToPath(path);
    else
        throw new Error("Should never get there!")
}
