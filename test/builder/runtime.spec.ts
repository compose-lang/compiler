import {fileURLToPath} from "url";
import {dirname} from "path";
import * as assert from "assert";
import ComposeBuilder from "../../src/builder/ComposeBuilder";

it('parses common.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/src/runtime/rt/common.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 7);
    assert.equal(unit.statements.length, 12);
    done();
}).timeout(5000);


it('parses tlfs.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/src/runtime/rt/tlfs.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 30);
    assert.equal(unit.statements.length, 15);
    done();
 }).timeout(5000);

it('parses rtrace.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/src/runtime/rt/rtrace.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 9);
    assert.equal(unit.statements.length, 0);
    done();
}).timeout(5000);

it('parses typeinfo.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/src/runtime/shared/typeinfo.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 4);
    assert.equal(unit.statements.length, 0);
    done();
}).timeout(5000);

it('parses error.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/src/runtime/util/error.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 0);
    assert.equal(unit.statements.length, 13);
    done();
}).timeout(5000);
