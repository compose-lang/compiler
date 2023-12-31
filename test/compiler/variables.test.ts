import { assertEquals } from "../../deps.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Pipeline from "../../src/compiler/Pipeline.ts";
import Runner from "../../src/runner/Runner.ts";

Deno.test('returns an assigned i32 literal',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("@ModuleExport function stuff(): i32 { const a: i32 = 12; return a; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assertEquals(result, 12);
});

Deno.test('reads a global i32 literal',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("@ModuleExport const SL_BITS: u32 = 4;");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assertEquals(result, 4);
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

