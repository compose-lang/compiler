import ComposeBuilder from "../../src/builder/ComposeBuilder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Compiler from "../../src/compiler/Compiler";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as os from "os";

it('compiles and runs a function using imported globals',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/import-export/importing.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const compiler = new Compiler();
    const wamTarget = new WasmBufferTarget();
    const dwarfPath = os.tmpdir() + "/" + "importing.dwarf"
    compiler.buildOne(unit, wamTarget);
    const runner = Runner.of(wamTarget.asWasmSource());
    const result = runner.runFunction<number>("useImports");
    assert.equal(result, 31);
});
