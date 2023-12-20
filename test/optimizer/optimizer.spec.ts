import Pipeline from "../../src/compiler/Pipeline.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Runner from "../../src/runner/Runner.ts";
import Optimizer from "../../src/optimizer/Optimizer.ts";
import WasmBufferSource from "../../src/runner/WasmBufferSource.ts";

Deno.test('optimizes an expression',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff():u32 { return 4 + 4 + 8 + 19 + 27; }");
    const wasmTarget = pipeline.build([unit])[0];
    let runner = Runner.of(wasmTarget.asWasmSource());
    let result = runner.runFunction("stuff");
    assertEquals(result, 62);
    const beforeSize = wasmTarget.asWasmBuffer().length;
    let beforeText = "";
    let afterText = "";
    const optimized = Optimizer.optimize(wasmTarget, null, (before, after) => { beforeText = before; afterText = after });
    const afterSize = (optimized as WasmBufferSource).length;
    runner = Runner.of(optimized);
    result = runner.runFunction("stuff");
    assertEquals(result, 62);
    assert(afterSize < beforeSize);
});
