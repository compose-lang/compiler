import * as assert from "assert";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import WasmBufferSource from "../../src/runner/WasmBufferSource";

it("loads a binary file", () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/simple/simple.wasm";
    const bytes = fs.readFileSync(path);
    const wasm = new WasmBufferSource(bytes);
    assert.equal(wasm.length, 78);
})




