import Pipeline from "../../src/compiler/Pipeline.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Runner from "../../src/runner/Runner.ts";
import { assertEquals } from "../../deps.ts";


Deno.test('runs a simple if',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("" +
        "@ModuleExport function stuff(v: u32): u32 { if (true) v = v + 1; return v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 64);
    assertEquals(result, 65);
});

Deno.test('runs a simple while loop',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("" +
        "@ModuleExport function stuff(v: u32): u32 { while ( v > 1) v = v - 1; return v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 7);
    assertEquals(result, 1);
});

