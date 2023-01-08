import ComposeBuilder from "../../src/builder/ComposeBuilder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Compiler from "../../src/compiler/Compiler";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it('compiles and runs an empty compilation unit',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("");
    compiler.buildOne(unit, target);
    Runner.of(target.asWasmSource());
});

it('returns an i32 literal',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff(): i32 { return 2; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 2);
});

it('returns an assigned i32 literal',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff(): i32 { const a: i32 = 12; return a; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('reads a global i32 literal',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("@ModuleExport const SL_BITS: u32 = 4;");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 4);
});

it('does not export a function without @ModuleExport',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("function stuff(): i32 { return 2; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.readFunction("stuff");
    assert.equal(result, null);
});

it('does not export a global without @ModuleExport',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("const SL_BITS: u32 = 4;");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, null);
});

it('runs a function call returning the result of another function returning an i32 literal',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("function inner(): i32 { return 12; } @ModuleExport function stuff(): i32 { return inner(); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('runs a function call ignoring the result of another function',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("function inner(): i32 { return 13; } @ModuleExport function stuff(): i32 { inner(); return 12; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('runs a function call with parameters',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("function inner(x: i32): i32 { return x + 1; } @ModuleExport function stuff(): i32 { return inner(12); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 13);
});

it('runs a parameterized function call',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("function inner<T>(x: T): T { return x; } @ModuleExport function stuff(): i32 { return inner<i32>(12); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('runs a static function call with parameters',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("class Inner { static inner(x: i32): i32 { return x + 1; } } @ModuleExport function stuff(): i32 { return Inner.inner(12); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 13);
});

it('runs a global function call with rest parameter',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("function withRest(...x: i32[]): i32 { return 5; } @ModuleExport function stuff(): i32 { return withRest(5, 12, 29); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 5);
});

it('runs a pre-increment expression',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { return ++v; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assert.equal(result, 7);
});

it('runs a pre-decrement expression',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { return --v; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assert.equal(result, 5);
});

it('runs a post-increment expression',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { const a: i32 = v++; const b: i32 = v++; return b; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assert.equal(result, 7);
});

it('runs a post-increment expression',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: i32): i32 { const a: i32 = v--; const b: i32 = v--; return b; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff", 6);
    assert.equal(result, 5);
});
