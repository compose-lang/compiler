import * as assert from "assert";
import Builder from "../../src/builder/Builder";
import Compiler from "../../src/compiler/Compiler";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Runner from "../../src/runner/Runner";

it('reads memory.size',  () => {
    const compiler = new Compiler();
    compiler.addMemory(3);
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("@Export native function memory_size(): i32 { memory.size 0; end; } }");
    compiler.buildOne(unit, target);
    const runner = Runner.of(target.asWasmSource());
    const result = runner.runFunction<number>("memory_size");
    assert.equal(result, 3);
 });
