let urls: typeof import("https://deno.land/std@0.83.0/node/url.ts");
if(Deno) {
    urls = await import("https://deno.land/std@0.83.0/node/url.ts");
}

export function fileURLToPath(path: string) {
    return urls.fileURLToPath(path);
}
