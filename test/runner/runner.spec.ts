import {fileURLToPath} from "url";
import {dirname} from "path";
import fs from "fs";
import WasmBufferSource from "../../src/runner/WasmBufferSource";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it("runs a wasm file",  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/assembly/simple/simple.wasm";
    const bytes = fs.readFileSync(path);
    const source = new WasmBufferSource(bytes);
    let result: number = 0;
    const importObject = {
        imports: {
            imported_func: (arg: number) => {
                result = arg;
            }
        }
    };
    const runner = Runner.of(source, importObject);
    runner.runFunction<void>("exported_func");
    assert.equal(result, 42);
});
