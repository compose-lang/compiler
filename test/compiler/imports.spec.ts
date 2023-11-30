import ComposeBuilder from "../../src/builder/ComposeBuilder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as os from "os";

it('compiles and runs a function using imported globals',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/cots/importing.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const pipeline = new Pipeline();
    const wasmTarget = new WasmBufferTarget();
    const dwarfPath = os.tmpdir() + "/" + "importing.dwarf"
    pipeline.buildOne(unit, wasmTarget);
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("useImports");
    assert.equal(result, 31);
});
