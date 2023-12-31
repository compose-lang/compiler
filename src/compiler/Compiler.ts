import Pipeline from "./Pipeline.ts";
import ComposeBuilder from "../builder/ComposeBuilder.ts";
import PipelineOptions from "./PipelineOptions.ts";
import WasmFileTarget from "./WasmFileTarget.ts";
import {filename} from "../platform/deno/FileUtils.ts";
import {FileStream} from "../platform/browser/Antlr4FileStream.ts";
import { CharStream } from "npm:antlr4";

export function compileFile(sourceFile: string, targetDir: string) {
    const options = PipelineOptions.DEFAULTS
        .with(options => {
            options.provideTarget = unit => {
                const targetPath = targetDir + filename(unit.path) + ".wasm";
                return new WasmFileTarget(targetPath);
            }
        })
    const pipeline = new Pipeline(options);
    const unit = ComposeBuilder.parse_unit_stream(new FileStream(sourceFile));
    unit.module.addMemory(3);
    return pipeline.build([unit])[0];

}

export function compileString(sourceCode: string) {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_stream(new CharStream(sourceCode));
    unit.module.addMemory(3);
    return pipeline.build([unit])[0];

}
