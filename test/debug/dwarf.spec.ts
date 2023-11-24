import {fileURLToPath} from "url";
import {dirname} from "path";
import assert from "assert";
import WasmFileSource from "../../src/runner/WasmFileSource";
import ReadStream from "../../src/utils/ReadStream";
import * as buffer from "buffer";


it('reads debug_info section',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(__filename));
    const path = __dirname + "/samples/dwarf/wasm/main.wasm";
    const wasmSource = new WasmFileSource(path);
    const module = wasmSource.compile();
    const section = WebAssembly.Module.customSections(module, ".debug_info")[0];
    assert.ok(section);
    console.log(section.byteLength);
    const stream = new ReadStream(section, true);
    // read length
    let int = stream.readUInt32();
    // read format
    int = stream.readUInt16();
    // read Offset in the abbreviation table
    int = stream.readUInt32();
    // read address size
    int = stream.readUInt8();
    assert.equal(int, 4);

});
