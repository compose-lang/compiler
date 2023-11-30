import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it('constifys binary op',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("@ModuleExport const SL_BITS: u32 = 4 + 4;");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 8);
});

it('constifys global',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("const AL_BITS: u32 = 4; @ModuleExport const SL_BITS: u32 = 4 + AL_BITS;");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 8);
});

it('constifys forward global',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("@ModuleExport let SL_BITS: u32 = 4 + AL_BITS; const AL_BITS: u32 = 4;");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 8);
});
