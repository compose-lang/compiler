import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Pipeline from "../../src/compiler/Pipeline.ts";
import Runner from "../../src/runner/Runner.ts";
import CompilerFlags from "../../src/compiler/CompilerFlags.ts";
import PipelineOptions from "../../src/compiler/PipelineOptions.ts";

Deno.test('debugs using an external debug file',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/cots/simple.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const dwarfPath = os.tmpdir();
    const options = PipelineOptions.DEFAULTS
        .with(options => options.compilerFlags = new CompilerFlags(true, false))
        .with(options => options.debugDir = dwarfPath);
    const pipeline = new Pipeline(options);
    const wasmTarget =  pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("simple_function", 50);
    assertEquals(result, 52);
});
