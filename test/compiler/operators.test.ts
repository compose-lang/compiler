import { assertEquals } from "../../deps.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Pipeline from "../../src/compiler/Pipeline.ts";
import Runner from "../../src/runner/Runner.ts";

Deno.test('runs a pre-increment expression',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { return ++v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assertEquals(result, 7);
});

Deno.test('runs a pre-decrement expression',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { return --v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assertEquals(result, 5);
});

Deno.test('runs a post-increment expression',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { const a: i32 = v++; const b: i32 = v++; return b; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assertEquals(result, 7);
});

Deno.test('runs a post-decrement expression',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { const a: i32 = v--; const b: i32 = v--; return b; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assertEquals(result, 5);
});

Deno.test('runs a pre-increment statement',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { ++v; return ++v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assertEquals(result, 8);
});

Deno.test('runs a pre-decrement statement',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { --v; return --v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assertEquals(result, 4);
});

Deno.test('runs a post-increment statement',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { v++; const a: i32 = v++; const b: i32 = v++; return b; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assertEquals(result, 8);
});

Deno.test('runs a post-increment statement',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { v--; const a: i32 = v--; const b: i32 = v--; return b; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assertEquals(result, 4);
});

Deno.test('runs a binary lshift expression on int32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32, k: i32): i32 { return v << k; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 64, 2);
    assertEquals(result, 64 << 2);
});

Deno.test('runs a binary rshift expression on int32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32, k: i32): i32 { return v >> k; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", -64, 2);
    assertEquals(result, -64 >> 2);
});

Deno.test('runs a binary rshift expression on uint32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: u32, k: u32): u32 { return v >> k; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 64, 2);
    assertEquals(result, 64 >> 2);
});

Deno.test('runs a binary and expression on int32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v1: i32, v2: i32): i32 { return v1 & v2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", -67, 37);
    assertEquals(result, -67 & 37);
});

Deno.test('runs a binary and expression on uint32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v1: u32, v2: u32): u32 { return v1 & v2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 67, 37);
    assertEquals(result, 67 & 37);
});

Deno.test('runs a binary or expression on int32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v1: i32, v2: i32): i32 { return v1 | v2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", -67, 37);
    assertEquals(result, -67 | 37);
});

Deno.test('runs a binary or expression on uint32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v1: u32, v2: u32): u32 { return v1 | v2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 67, 37);
    assertEquals(result, 67 | 37);
});

Deno.test('runs a binary xor expression on int32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v1: i32, v2: i32): i32 { return v1 ^ v2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", -67, 37);
    assertEquals(result, -67 ^ 37);
});

Deno.test('runs a binary xor expression on uint32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v1: u32, v2: u32): u32 { return v1 ^ v2; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 67, 37);
    assertEquals(result, 67 ^ 37);
});

Deno.test('runs a unary not expression on uint32',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: u32): u32 { return ~v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 64);
    assertEquals(result, ~64);
});
