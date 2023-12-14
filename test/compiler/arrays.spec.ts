import Pipeline from "../../src/compiler/Pipeline";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Runner from "../../src/runner/Runner";
import assert from "assert";
import PipelineOptions from "../../src/compiler/PipelineOptions";

it('returns an i32 array',  () => {
    const options = PipelineOptions.DEFAULTS
        .with(options => options.dumpWatPath = "dumps/returns_an_i32_array.wat")
        .with(options => options.dumpWasmPath = "dumps/returns_an_i32_array.wasm")
    const pipeline = new Pipeline(options);
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff(): i32[] { const a:i32[] = [ 3, 5 ]; return a; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, []);
});
