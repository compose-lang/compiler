import * as fs from "fs";
import binaryen from "binaryen";

const wat = fs.readFileSync("../dumps/returns_an_i32_array.wat", "utf8");
const module = binaryen.parseText(wat);
module.setFeatures(binaryen.Features.GC | binaryen.Features.ReferenceTypes)
const wasm = module.emitBinary();
fs.writeFileSync("../dumps/returns_an_i32_array.wasm", wasm);
const binary = binaryen.readBinary(wasm)
