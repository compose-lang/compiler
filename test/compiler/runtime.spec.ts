import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import {fileURLToPath} from "url";
import {dirname} from "path";
import PipelineOptions from "../../src/compiler/PipelineOptions";

it('parses and checks memory.cots',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/rt/memory.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const options = PipelineOptions.DEFAULTS.withAssemble(false);
    const pipeline = new Pipeline(options);
    pipeline.build([unit]);
});
