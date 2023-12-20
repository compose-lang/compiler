import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Pipeline from "../../src/compiler/Pipeline.ts";
import Runner from "../../src/runner/Runner.ts";
import ISourceLocator from "../../src/runner/ISourceLocator.ts";

Deno.test('compiles and runs a function using imported globals',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const unitPath = __dirname + "/samples/cots/importing.cots";
    const unit = ComposeBuilder.parse_unit(unitPath);
    const pipeline = new Pipeline();
    const wasmTargets = pipeline.build([unit]);
    assertEquals(wasmTargets.length, 2);
    assertEquals(pipeline.units.length, 2);
    const sourceLocator: ISourceLocator = (path: string) => {
        const index = pipeline.units.findIndex(unit => unit.path == path);
        assert(index >= 0);
        return wasmTargets[index].asWasmSource();
    }
    const runner = Runner.of(wasmTargets[0].asWasmSource(), null, sourceLocator);
    const result = runner.runFunction<number>("useImports");
    assertEquals(result, 31);
});
