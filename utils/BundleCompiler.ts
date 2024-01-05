/// <reference types="https://deno.land/x/esbuild@v0.19.10/mod.d.ts" />
import { build, stop, BuildOptions, Plugin, PluginBuild } from "https://deno.land/x/esbuild@v0.19.10/mod.js";
import { dirname } from "../src/platform/deno/FileUtils.ts";

const project_path = dirname(new URL('.', import.meta.url).pathname) + "/";
const sources_path = project_path + "src/";
const node_modules_path = project_path + "node_modules/";

const resolveModulesForNode: Plugin = {
    name: "NodeResolver",
    setup: (build: PluginBuild) => {
        build.onResolve({ filter: /npm:antlr4/ }, _args => {
            return { path: "antlr4", external: true }
        });
        build.onResolve({ filter: /\.\.\/platform\/deno\// }, _args => {
            const path = _args.path.replace("../", sources_path).replace("/deno/", "/node/");
            return { path }
        });
        build.onResolve({ filter: /\.\/src\/platform\/deno\// }, _args => {
            const path = _args.path.replace("./src/", sources_path).replace("/deno/", "/node/");
            return { path }
        });
    }
}

const resolveModulesForBrowser: Plugin = {
    name: "BrowserResolver",
    setup: (build: PluginBuild) => {
        build.onResolve({ filter: /npm:antlr4/ }, _args => {
            return { path: node_modules_path + "antlr4/dist/antlr4.web.mjs" }
        });
        build.onResolve({ filter: /\.\.\/platform\/deno\// }, _args => {
            const path = _args.path.replace("../", sources_path).replace("/deno/", "/browser/");
            return { path }
        });
        build.onResolve({ filter: /\.\/src\/platform\/deno\// }, _args => {
            const path = _args.path.replace("./src/", sources_path).replace("/deno/", "/browser/");
            return { path }
        });
    }
}

async function minify() {
    const options: BuildOptions = {
        bundle: true,
        minify: true,
        sourcemap: true,
        format: "esm"
    };
    const nodeOptions = Object.assign({}, options,  { platform: "node", entryPoints: ["../src/index.node.ts"], outfile: "../dist/compose-node.js", plugins: [ resolveModulesForNode ] });
    const browserOptions = Object.assign({}, options,  { target: "chrome119", entryPoints: ["../src/index.browser.ts"], outfile: "../dist/compose-browser.js", plugins: [ resolveModulesForBrowser ] });
    await build(nodeOptions);
    await build(browserOptions);
    stop();
}

await minify();
