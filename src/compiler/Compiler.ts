import Pipeline from "./Pipeline.ts";
import ComposeBuilder from "../builder/ComposeBuilder.ts";
import PipelineOptions from "./PipelineOptions.ts";
import WasmFileTarget from "./WasmFileTarget.ts";
import {filename} from "../utils/FileUtils.ts";

export default function compile(source: string, targetDir: string) {
    const options = PipelineOptions.DEFAULTS
        .with(options => {
            options.provideTarget = unit => {
                const targetPath = targetDir + filename(unit.path) + ".wasm";
                return new WasmFileTarget(targetPath);
            }
        })
    const pipeline = new Pipeline(options);
    const unit = ComposeBuilder.parse_unit(source);
    unit.module.addMemory(3);
    /* const wasmTarget = */ pipeline.build([unit])[0];

}
