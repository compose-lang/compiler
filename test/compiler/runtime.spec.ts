import * as assert from "assert";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Compiler from "../../src/compiler/Compiler";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import {fileURLToPath} from "url";
import {dirname} from "path";

it('compiles tlfs.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/rt/tlfs.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    compiler.buildOne(unit, target);
    assert.equal(compiler.module.getGlobalsSection().globals.length, 13);
    done();
}).timeout(5000);
