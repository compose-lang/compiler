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

it('runs a function call returning the result of another function returning an i32 literal',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("function inner(): i32 { return 12; } @ModuleExport function stuff(): i32 { return inner(); }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('runs a function call ignoring the result of another function',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("function inner(): i32 { return 13; } @ModuleExport function stuff(): i32 { inner(); return 12; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('runs a void function call',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("function inner(): void { } @ModuleExport function stuff(): i32 { inner(); return 12; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('runs a function call with parameters',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("function inner(x: i32): i32 { return x + 1; } @ModuleExport function stuff(): i32 { return inner(12); }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 13);
});

it('runs a parameterized function call',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("function inner<T>(x: T): T { return x; } @ModuleExport function stuff(): i32 { return inner<i32>(12); }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('runs a static function call with parameters',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("class Inner { static inner(x: i32): i32 { return x + 1; } } @ModuleExport function stuff(): i32 { return Inner.inner(12); }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 13);
});

it('runs a global function call with rest parameter',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("function withRest(...x: i32[]): i32 { return 5; } @ModuleExport function stuff(): i32 { return withRest(5, 12, 29); }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 5);
});


it('returns a string received as parameter', () => {
    const value = "Hello world!"
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: string): string { return v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<string>("stuff", value);
    assert.equal(result, value);
})
