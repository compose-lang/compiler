import urls from "node:url";

export function fileURLToPath(url: string) {
    return urls.fileURLToPath(url);
}
