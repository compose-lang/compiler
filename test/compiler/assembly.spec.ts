import * as assert from "assert";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";

it('reads memory.size',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("@ModuleExport native function memory_size(): i32 { memory.size 0; end; } }");
    unit.module.addMemory(3);
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("memory_size");
    assert.equal(result, 3);
 });
