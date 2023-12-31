import { assertEquals } from "../../deps.ts";
import WasmBufferSource from "../../src/runner/WasmBufferSource.ts";
import { dirname, readPathSync } from "../../src/platform/deno/FileUtils.ts";
import { fileURLToPath } from "../../src/platform/deno/URLUtils.ts";

Deno.test("loads a binary file", () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/assembly/simple/simple.wasm";
    const bytes = readPathSync(path);
    const wasm = new WasmBufferSource(bytes);
    assertEquals(wasm.length, 78);
})




