import * as assert from "assert";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Compiler from "../../src/compiler/Compiler";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import {fileURLToPath} from "url";
import {dirname} from "path";
import CompilerOptions from "../../src/compiler/CompilerOptions";

it('parses and checks tlfs.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/rt/memory.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const options = new CompilerOptions();
    options.compile = false; // TODO
    compiler.buildOne(unit, target, null, options);
    // TODO once we declare assert.equal(compiler.module.getGlobalsSection().globals.length, 13);
    done();
}).timeout(5000);
