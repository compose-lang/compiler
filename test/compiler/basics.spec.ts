import Builder from "../../src/builder/Builder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Compiler from "../../src/compiler/Compiler";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it('compiles and runs an empty compilation unit',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("");
    compiler.buildOne(unit, target);
    Runner.of(target.asWasmSource());
});

it('compiles and runs a function returning an i32 literal',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("function stuff(): i32 { return 2; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 2);
});

it('compiles and runs a function assigning an i32 literal and returning it',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("function stuff(): i32 { const a: i32 = 12; return a; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assert.equal(result, 12);
});

it('compiles and reads a global i32 literal',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("const SL_BITS: u32 = 4;");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.readGlobal<number>("SL_BITS");
    assert.equal(result, 4);
});
