import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it('returns an assigned i32 literal',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff(): i32 { const a: i32 = 12; return a; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('reads a global i32 literal',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("@ModuleExport const SL_BITS: u32 = 4;");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 4);
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

