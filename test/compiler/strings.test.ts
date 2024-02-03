import Pipeline from "../../src/compiler/Pipeline.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Runner from "../../src/runner/Runner.ts";
import {assertTrue} from "../../src/platform/deno/AssertUtils.ts";
import ISourceLocator from "../../src/runner/ISourceLocator.ts";
import { unit as arrayUnit } from "../../src/type/ArrayType.ts";

Deno.test('returns an opaque string ref',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data(`
    @ModuleExport
    function stuff(): string {
        return "Hey John!";
    }
   `);
    const wasmTargets = pipeline.build([unit, arrayUnit]);
    const sourceLocator: ISourceLocator = (url: URL) => {
        const urlStr = url.toString();
        const index = pipeline.units.findIndex(unit => unit.url.toString() == urlStr);
        assertTrue(index >= 0);
        return wasmTargets[index].asWasmSource();
    }
    const runner = Runner.of(wasmTargets[0].asWasmSource(), null, sourceLocator);
    const result = runner.runFunction<number>("stuff");
    assertTrue(result);
});

