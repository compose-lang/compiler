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

it('compiles and runs a method returning an i32 literal',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("function stuff(): i32 { return 2; }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.run("stuff");
    assert.equal(result, 2);
});
