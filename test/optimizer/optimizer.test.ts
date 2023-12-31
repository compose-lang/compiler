import Pipeline from "../../src/compiler/Pipeline.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Runner from "../../src/runner/Runner.ts";
import Optimizer from "../../src/optimizer/Optimizer.ts";
import WasmBufferSource from "../../src/runner/WasmBufferSource.ts";
import { assertTrue, assertEquals } from "../../deps.ts";

Deno.test('optimizes an expression',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("@ModuleExport function stuff():u32 { return 4 + 4 + 8 + 19 + 27; }");
    const wasmTarget = pipeline.build([unit])[0];
    let runner = Runner.of(wasmTarget.asWasmSource());
    let result = runner.runFunction("stuff");
    assertEquals(result, 62);
    const beforeSize = wasmTarget.asWasmBuffer().length;
    let _beforeText = "";
    let _afterText = "";
    const optimized = Optimizer.optimize(wasmTarget, null, (before, after) => { _beforeText = before; _afterText = after });
    const afterSize = (optimized as WasmBufferSource).length;
    runner = Runner.of(optimized);
    result = runner.runFunction("stuff");
    assertEquals(result, 62);
    assertTrue(afterSize < beforeSize);
});
