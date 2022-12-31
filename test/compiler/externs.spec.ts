import Builder from "../../src/builder/Builder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Compiler from "../../src/compiler/Compiler";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it('compiles and runs a function using imported function',  () => {
    const code = "@ModuleImport(\"wow\") abstract function doFetch(): i32; @ModuleExport function fetch(): i32 { return wow.doFetch(); }";
    const unit = Builder.parse_unit(code);
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    compiler.buildOne(unit, target);
    const imports = { wow: { doFetch: function() { return 17; } } };
    const runner = Runner.of(target.asWasmSource(), imports);
    const result = runner.runFunction<number>("fetch");
    assert.equal(result, 17);
});
