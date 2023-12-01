import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";
import {fileURLToPath} from "url";
import {dirname} from "path";
import ISourceLocator from "../../src/runner/ISourceLocator";

it('compiles and runs a function using imported globals',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const unitPath = __dirname + "/samples/cots/importing.cots";
    const unit = ComposeBuilder.parse_unit(unitPath);
    assert.notEqual(unit.path, "<memory>");
    const pipeline = new Pipeline();
    const wasmTargets = pipeline.build([unit]);
    assert.equal(wasmTargets.length, 2);
    assert.equal(pipeline.units.length, 2);
    console.log("Units paths after build: " + pipeline.units.map(u => u.path).join(", "));
    const sourceLocator: ISourceLocator = (path: string) => {
        const index = pipeline.units.findIndex(unit => unit.path == path);
        if(index < 0) {
            console.log("Unit path: " + unitPath);
            console.log("Dependency path: " + path);
            console.log("Units paths: " + pipeline.units.map(u => u.path).join(", "));
        }
        assert.ok(index >= 0);
        return wasmTargets[index].asWasmSource();
    }
    const runner = Runner.of(wasmTargets[0].asWasmSource(), null, sourceLocator);
    const result = runner.runFunction<number>("useImports");
    assert.equal(result, 31);
    done();
});
