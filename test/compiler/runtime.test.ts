import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Pipeline from "../../src/compiler/Pipeline.ts";
import PipelineOptions from "../../src/compiler/PipelineOptions.ts";
import { dirname } from "../../src/platform/deno/FileUtils.ts";
import { fileURLToPath } from "../../src/platform/deno/URLUtils.ts";

Deno.test('parses and checks memory.cots',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/rt/memory.cots";
    const unit = ComposeBuilder.parse_unit_data(path);
    const options = PipelineOptions.DEFAULTS.with(options => options.compile = false); // TODO enable once we support classes
    const pipeline = new Pipeline(options);
    pipeline.build([unit]);
});
