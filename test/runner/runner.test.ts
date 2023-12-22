import WasmBufferSource from "../../src/runner/WasmBufferSource.ts";
import Runner from "../../src/runner/Runner.ts";
import { assertEquals } from "../../deps.ts";
import { fileURLToPath } from "https://deno.land/std@0.83.0/node/url.ts";
import { dirname, readFileSync } from "../../src/utils/FileUtils.ts";

Deno.test("runs a wasm file",  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/assembly/simple/simple.wasm";
    const bytes = readFileSync(path);
    const source = new WasmBufferSource(bytes);
    let result = 0;
    const importObject = {
        imports: {
            imported_func: (arg: number) => {
                result = arg;
            }
        }
    };
    const runner = Runner.of(source, importObject);
    runner.runFunction<void>("exported_func");
    assertEquals(result, 42);
});
