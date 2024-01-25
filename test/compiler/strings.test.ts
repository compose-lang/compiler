import Pipeline from "../../src/compiler/Pipeline.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Runner from "../../src/runner/Runner.ts";
import {assertTrue} from "../../src/platform/deno/AssertUtils.ts";

/*
Deno.test('returns an opaque string ref',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data(`
    @ModuleExport
    function stuff(): string {
        return "abcd";
    }
   `);
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assertTrue(result);
});
*/
