import * as assert from "assert";
import Builder from "../../src/builder/Builder";
import Compiler from "../../src/compiler/Compiler";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Runner from "../../src/runner/Runner";

it('reads sizeof<i32>',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@Export function i32_sizeof(): i32 { return sizeof(i32); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("i32_sizeof");
    assert.equal(result, 4);
 });

it('reads sizeof<i64>',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@Export function i64_sizeof(): i32 { return sizeof(i64); }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("i64_sizeof");
    assert.equal(result, 8);
});
