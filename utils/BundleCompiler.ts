/// <reference types="https://deno.land/x/esbuild@v0.19.10/mod.d.ts" />
import { build, stop, BuildOptions, Plugin, PluginBuild } from "https://deno.land/x/esbuild@v0.19.10/mod.js";
import { dirname } from "../src/utils/FileUtils.ts";
import ignorePlugin from "npm:esbuild-plugin-ignore";

// const node_modules_path = dirname(new URL('.', import.meta.url).pathname) + "/node_modules/";

const resolveModulesForNode: Plugin = {
    name: "NpmModuleResolver",
    setup: (build: PluginBuild) => {
        build.onResolve({ filter: /npm:antlr4/ }, _args => {
            return { path: "antlr4", external: true }
        });
    }
}

const resolveModulesForBrowser: Plugin = {
    name: "BinaryenWebModuleResolver",
    setup: (build: PluginBuild) => {
        build.onResolve({ filter: /npm:antlr4/ }, _args => {
            return { path: "../node_modules/antlr4/dist/antlr4.web.mjs", external: true }
        });
        build.onResolve({ filter: /\.\/binaryen_raw_wasm\.js/ }, args => {
            return { path: dirname(args.importer) + "/binaryen_raw_wasm_browser.js" };
        });
        build.onResolve({ filter:/https:\/\/deno.land\/std@0.209.0\/assert\//}, _args => {
            return { path: dirname(new URL('.', import.meta.url).pathname) + "/src/utils/WebAssert.ts"}
        })
    }
}

async function minify() {
    const options: BuildOptions = {
        entryPoints: [ "../src/compiler/Compiler.ts" ],
        bundle: true,
        minify: true,
        format: "esm"
    };
    const nodeOptions = Object.assign({}, options,  { platform: "node", outfile: "../dist/compose-compiler-node.js", plugins: [ resolveModulesForNode ] });
    const webOptions = Object.assign({}, options,  { target: "chrome119", outfile: "../dist/compose-compiler-browser.js", plugins: [ resolveModulesForBrowser,
            ignorePlugin([{
                resourceRegExp: /https:\/\/deno.land/
            }])
        ] });
    await build(nodeOptions);
    await build(webOptions);
    stop();
}

await minify();
