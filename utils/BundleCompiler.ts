/// <reference types="https://deno.land/x/esbuild@v0.19.10/mod.d.ts" />
import { build, stop, BuildOptions } from "https://deno.land/x/esbuild@v0.19.10/mod.js";


async function minify() {
    const options: BuildOptions = {
        entryPoints: [ "../src/compiler/Compiler.ts" ],
        external: [ "npm:antlr4" ],
        bundle: true,
        minify: true,
        platform: "node",
        format: "esm",
        outfile: "../dist/compose-compiler.js"
    };
    await build(options);
    stop();
}

await minify();
