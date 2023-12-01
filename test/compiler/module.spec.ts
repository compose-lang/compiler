import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it('compiles and runs an empty compilation unit',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("");
    const wasmTarget = pipeline.build([unit])[0];
    Runner.of(wasmTarget.asWasmSource());
});

it('returns an i32 literal',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff(): i32 { return 2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 2);
});

it('does not export a function without @ModuleExport',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("function stuff(): i32 { return 2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readFunction("stuff");
    assert.equal(result, null);
});

it('does not export a global without @ModuleExport',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("const SL_BITS: u32 = 4;");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, null);
});
