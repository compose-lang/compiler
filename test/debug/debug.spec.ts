import ComposeBuilder from "../../src/builder/ComposeBuilder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as os from "os";
import CompilerFlags from "../../src/compiler/CompilerFlags";

it('debugs using an external dwarf file',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/cots/simple.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const pipeline = new Pipeline();
    const wasmTarget = new WasmBufferTarget();
    const dwarfPath = os.tmpdir();
    pipeline.buildOne(unit, wasmTarget, new CompilerFlags(true, false, dwarfPath));
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("simple_function", 50);
    assert.equal(result, 52);
});
