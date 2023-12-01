import Pipeline from "../../src/compiler/Pipeline";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Runner from "../../src/runner/Runner";
import assert from "assert";

it('runs a simple if',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: u32): u32 { if (true) v = v + 1; return v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 64);
    assert.equal(result, 65);
});
