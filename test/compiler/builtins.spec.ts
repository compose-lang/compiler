import * as assert from "assert";
import Builder from "../../src/builder/Builder";
import Compiler from "../../src/compiler/Compiler";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Runner from "../../src/runner/Runner";

it('reads sizeof<boolean>',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@ModuleExport function boolean_sizeof(): i32 { return sizeof(boolean); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("boolean_sizeof");
    assert.equal(result, 1);
});

it('reads sizeof<i32>',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@ModuleExport function i32_sizeof(): i32 { return sizeof(i32); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("i32_sizeof");
    assert.equal(result, 4);
 });

it('reads sizeof<i64>',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@ModuleExport function i64_sizeof(): i32 { return sizeof(i64); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("i64_sizeof");
    assert.equal(result, 8);
});

it('reads alignof<boolean>',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@ModuleExport function boolean_alignof(): i32 { return alignof(boolean); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("boolean_alignof");
    assert.equal(result, 1);
});

it('reads alignof<i32>',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@ModuleExport function i32_alignof(): i32 { return alignof(i32); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("i32_alignof");
    assert.equal(result, 4);
});

it('reads alignof<i64>',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@ModuleExport function i64_alignof(): i32 { return alignof(i64); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("i64_alignof");
    assert.equal(result, 4);
});
