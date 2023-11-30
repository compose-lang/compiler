import * as assert from "assert";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Pipeline from "../../src/compiler/Pipeline";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import {fileURLToPath} from "url";
import {dirname} from "path";
import PipelineOptions from "../../src/compiler/PipelineOptions";

it('parses and checks memory.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/rt/memory.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const pipeline = new Pipeline();
    const target = new WasmBufferTarget();
    const options = new PipelineOptions();
    options.compile = false; // TODO
    pipeline.buildOne(unit, target, null, options);
    // TODO once we declare assert.equal(compiler.module.getGlobalsSection().globals.length, 13);
    done();
}).timeout(5000);
