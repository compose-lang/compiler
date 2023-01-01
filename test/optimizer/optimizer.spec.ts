import Compiler from "../../src/compiler/Compiler";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Runner from "../../src/runner/Runner";
import assert from "assert";
import Optimizer from "../../src/optimizer/Optimizer";
import WasmBufferSource from "../../src/runner/WasmBufferSource";

it('optimizes an expression',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff():u32 { return 4 + 4 + 8 + 19 + 27; }");
    compiler.buildOne(unit, target);
    let runner = Runner.of(target.asWasmSource());
    let result = runner.runFunction("stuff");
    assert.equal(result, 62);
    const beforeSize = target.asWasmBuffer().length;
    let beforeText = "";
    let afterText = "";
    const optimized = Optimizer.optimize(target, null, (before, after) => { beforeText = before; afterText = after });
    const afterSize = (optimized as WasmBufferSource).length;
    runner = Runner.of(optimized);
    result = runner.runFunction("stuff");
    assert.equal(result, 62);
    assert.ok(afterSize < beforeSize);
});
