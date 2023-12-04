import Pipeline from "../../src/compiler/Pipeline";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Runner from "../../src/runner/Runner";
import assert from "assert";

it('returns an empty i32 array',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff(): i32[] { const a:i32[] = []; return a; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, []);
});
