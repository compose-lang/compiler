import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";

it('compiles and runs a function using imported function',  () => {
    const code = "@ModuleImport(\"wow\") abstract function doFetch(): i32; @ModuleExport function fetch(): i32 { return wow.doFetch(); }";
    const unit = ComposeBuilder.parse_unit(code);
    const pipeline = new Pipeline();
    const wasmTarget = pipeline.build([unit])[0];
    const imports = { wow: { doFetch: function() { return 17; } } };
    const runner = Runner.of(wasmTarget.asWasmSource(), imports);
    const result = runner.runFunction<number>("fetch");
    assert.equal(result, 17);
});
