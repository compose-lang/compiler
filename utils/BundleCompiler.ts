/// <reference types="https://deno.land/x/esbuild@v0.19.10/mod.d.ts" />
import { build, stop, BuildOptions, Plugin, PluginBuild } from "https://deno.land/x/esbuild@v0.19.10/mod.js";
import { dirname } from "../src/utils/FileUtils.ts";

// const node_modules_path = dirname(new URL('.', import.meta.url).pathname) + "/node_modules/";

const resolveNpmModuleResolver: Plugin = {
    name: "NpmModuleResolver",
    setup: (build: PluginBuild) => {
        build.onResolve({ filter: /npm:.*/ }, args => {
            return { path: args.path.substring("npm:".length), external: true }
        })
    }

}

async function minify() {
    const options: BuildOptions = {
        entryPoints: [ "../src/compiler/Compiler.ts" ],
        /* external: [ "npm:antlr4" ], */
        bundle: true,
        minify: true,
        format: "esm",
        plugins: [ resolveNpmModuleResolver ]
    };
    const nodeOptions = Object.assign({}, options,  { platform: "node", outfile: "../dist/compose-compiler-node.js" });
    const webOptions = Object.assign({}, options,  { outfile: "../dist/compose-compiler-browser.js" });
    await build(nodeOptions);
    await build(webOptions);
    stop();
}

await minify();
