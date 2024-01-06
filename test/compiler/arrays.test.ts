import Pipeline from "../../src/compiler/Pipeline.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Runner from "../../src/runner/Runner.ts";
import {assertEquals, assertTrue} from "../../deps.ts";
/*
Deno.test('returns an opaque i32 array',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("@ModuleExport function stuff(): i32[] { const a:i32[] = [ 3, 5 ]; return a; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assertTrue(result);
});
*/
Deno.test('returns an i32 array item',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data("@ModuleExport function stuff(idx: u32): i32 { const a:i32[] = [ 3, 5 ]; return a[idx]; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 1);
    assertEquals(result, 5);
});