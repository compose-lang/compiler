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

Deno.test('runs a simple do-while loop',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("" +
        "@ModuleExport function stuff(v: u32): u32 { do { v = v - 1; } while ( v > 1)\nreturn v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 7);
    assertEquals(result, 1);
});

Deno.test('runs a simple for loop',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("" +
        "@ModuleExport function stuff(v: u32): u32 { let a: u32 = 0; for ( let i: u32 = 0; i < v; i = i + 1 ) { a = a + 1; }\nreturn a; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 7);
    assertEquals(result, 7);
});


