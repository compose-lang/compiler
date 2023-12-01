import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";
import {fileURLToPath} from "url";
import {dirname} from "path";
import * as os from "os";
import ISourceLocator from "../../src/runner/ISourceLocator";

it('compiles and runs a function using imported globals',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/cots/importing.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const pipeline = new Pipeline();
    const wasmTargets = pipeline.build([unit]);
    const sourceLocator: ISourceLocator = (path: string) => {
        const index = pipeline.units.findIndex(unit => unit.path == path);
        assert.ok(index >= 0);
        return wasmTargets[index].asWasmSource();
    }
    const runner = Runner.of(wasmTargets[0].asWasmSource(), null, sourceLocator);
    const result = runner.runFunction<number>("useImports");
    assert.equal(result, 31);
});
