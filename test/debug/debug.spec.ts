import ComposeBuilder from "../../src/builder/ComposeBuilder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Compiler from "../../src/compiler/Compiler";
import Runner from "../../src/runner/Runner";
import * as assert from "assert";
import {fileURLToPath} from "url";
import {dirname} from "path";
import DwarfExternalTarget from "../../src/module/debug/DwarfExternalTarget";
import ExternalDebugSection from "../../src/module/debug/ExternalDebugSection";
import WasmFileSource from "../../src/runner/WasmFileSource";
import tempfile from "tempfile";

it('generates file dwarf',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/import-export/importing.cots";
    const unit = ComposeBuilder.parse_unit(path);
    const compiler = new Compiler();
    const wamTarget = new WasmBufferTarget();
    const dwarfPath = tempfile({ extension: ".wasm"});
    console.log("dwarfPath: " + dwarfPath);
    const dwarfTarget = new DwarfExternalTarget(dwarfPath);
    compiler.buildOne(unit, wamTarget, dwarfTarget);
    const wasmSource = wamTarget.asWasmSource();
    // ensure debug info doesn't break runability
    const runner = Runner.of(wasmSource);
    const result = runner.runFunction<number>("useImports");
    assert.equal(result, 31);
    // check debug info in module
    const wasmModule = wasmSource.compile();
    let sections = WebAssembly.Module.customSections(wasmModule, ExternalDebugSection.NAME) || [];
    assert.equal(sections.length, 1);
    // check debug file
    const dwarfSource = new WasmFileSource(dwarfPath);
    const dwarfModule = dwarfSource.compile();
    sections = WebAssembly.Module.customSections(dwarfModule, ".debug_info") || [];
    assert.equal(sections.length, 1);
});
