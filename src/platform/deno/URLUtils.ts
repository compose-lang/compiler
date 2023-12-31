import urls from "https://deno.land/std@0.83.0/node/url.ts";

export function fileURLToPath(url: string) {
    return urls.fileURLToPath(url);
}
