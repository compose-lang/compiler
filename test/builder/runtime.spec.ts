import {fileURLToPath} from "url";
import {dirname} from "path";
import * as assert from "assert";
import Builder from "../../src/builder/Builder";

it('parses mem.cots',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/src/runtime/mem.cots";
    const unit = Builder.parse_unit(path);
    assert.equal(unit.declarations.length, 27);
    assert.equal(unit.statements.length, 15);
 });
