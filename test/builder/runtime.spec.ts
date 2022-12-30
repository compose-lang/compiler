import {fileURLToPath} from "url";
import {dirname} from "path";
import * as assert from "assert";
import Builder from "../../src/builder/Builder";

it('parses common.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/src/runtime/common.cots";
    const unit = Builder.parse_unit(path);
    assert.equal(unit.declarations.length, 7);
    assert.equal(unit.statements.length, 12);
    done();
}).timeout(5000);


it('parses mem.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/src/runtime/mem.cots";
    const unit = Builder.parse_unit(path);
    assert.equal(unit.declarations.length, 30);
    assert.equal(unit.statements.length, 15);
    done();
 }).timeout(5000);
