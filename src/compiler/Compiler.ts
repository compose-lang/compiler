import Pipeline from "./Pipeline.ts";
import ComposeBuilder from "../builder/ComposeBuilder.ts";
import PipelineOptions from "./PipelineOptions.ts";
import WasmFileTarget from "./WasmFileTarget.ts";
import {filename} from "../platform/deno/FileUtils.ts";
import {FileStream} from "../platform/browser/Antlr4FileStream.ts";
import { CharStream } from "npm:antlr4";
import {fileURLToPath} from "../platform/deno/URLUtils.ts";

export function compileFile(sourceFile: string, targetDir: string) {
    const options = PipelineOptions.DEFAULTS
        .with(options => {
            options.provideTarget = unit => {
                const unitPath = fileURLToPath(unit.url.toString());
                const targetPath = targetDir + filename(unitPath) + ".wasm";
                return new WasmFileTarget(new URL("file://" + targetPath));
            }
        })
    const pipeline = new Pipeline(options);
    const unit = ComposeBuilder.parse_unit_stream(new FileStream(sourceFile));
    return pipeline.build([unit])[0];

}

export function compileString(sourceCode: string) {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_stream(new CharStream(sourceCode));
    return pipeline.build([unit])[0];

}
