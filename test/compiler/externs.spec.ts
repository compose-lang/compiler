import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Pipeline from "../../src/compiler/Pipeline.ts";
import Runner from "../../src/runner/Runner.ts";

Deno.test('compiles and runs a function using imported function',  () => {
    const code = "@ModuleImport(\"wow\") abstract function doFetch(): i32; @ModuleExport function fetch(): i32 { return wow.doFetch(); }";
    const unit = ComposeBuilder.parse_unit(code);
    const pipeline = new Pipeline();
    const wasmTarget = pipeline.build([unit])[0];
    const imports = { wow: { doFetch: function() { return 17; } } };
    const runner = Runner.of(wasmTarget.asWasmSource(), imports);
    const result = runner.runFunction<number>("fetch");
    assertEquals(result, 17);
});
