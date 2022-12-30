import Builder from "../../src/builder/Builder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Compiler from "../../src/compiler/Compiler";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";
import {fileURLToPath} from "url";
import {dirname} from "path";

it('compiles and runs a function using imported globals',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/import-export/importing.cots";
    const unit = Builder.parse_unit(path);
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("useImports");
    assert.equal(result, 31);
});
