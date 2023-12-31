import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Pipeline from "../../src/compiler/Pipeline.ts";
import Runner from "../../src/runner/Runner.ts";
/// <reference types="../../src/binaryen/binaryen_wasm.d.ts" />
import {Module, Feature} from "../../src/binaryen/binaryen_wasm.js";
import { assertEquals } from "../../deps.ts";

Deno.test('compiles and runs an empty compilation unit',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("");
    const wasmTarget = pipeline.build([unit])[0];
    Runner.of(wasmTarget.asWasmSource());
});

Deno.test('returns an i32 literal',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("@ModuleExport function stuff(): i32 { return 2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assertEquals(result, 2);
});

Deno.test('does not export a function without @ModuleExport',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("function stuff(): i32 { return 2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readFunction("stuff");
    assertEquals(result, null);
});

Deno.test('does not export a global without @ModuleExport',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("const SL_BITS: u32 = 4;");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assertEquals(result, null);
});

Deno.test('it adds a Feature',  () => {
    const module = new Module();
    const before = module.getFeatures();
    module.addFeature(Feature.GC);
    const after = module.getFeatures();
    before.add(Feature.GC);
    assertEquals(after, before);
});
