import ComposeBuilder from "../../src/builder/ComposeBuilder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it('constifys binary op',  () => {
    const pipeline = new Pipeline();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("@ModuleExport const SL_BITS: u32 = 4 + 4;");
    pipeline.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 8);
});

it('constifys global',  () => {
    const pipeline = new Pipeline();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("const AL_BITS: u32 = 4; @ModuleExport const SL_BITS: u32 = 4 + AL_BITS;");
    pipeline.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 8);
});

it('constifys forward global',  () => {
    const pipeline = new Pipeline();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("@ModuleExport let SL_BITS: u32 = 4 + AL_BITS; const AL_BITS: u32 = 4;");
    pipeline.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 8);
});
