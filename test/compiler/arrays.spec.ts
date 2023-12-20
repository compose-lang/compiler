import Pipeline from "../../src/compiler/Pipeline.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Runner from "../../src/runner/Runner.ts";
import { assertEquals } from "https://deno.land/std@0.209.0/assert/mod.ts";
import PipelineOptions from "../../src/compiler/PipelineOptions.ts";

Deno.test('returns an i32 array',  () => {
    const options = PipelineOptions.DEFAULTS
        .with(options => options.dumpWatPath = "dumps/returns_an_i32_array.wat")
        .with(options => options.dumpWasmPath = "dumps/returns_an_i32_array.wasm")
    const pipeline = new Pipeline(options);
    const unit = ComposeBuilder.parse_unit("@ModuleExport function stuff(): i32[] { const a:i32[] = [ 3, 5 ]; return a; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    // assertEquals(result, []);
});
