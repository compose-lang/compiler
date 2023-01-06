import {fileURLToPath} from "url";
import {dirname} from "path";
import * as assert from "assert";
import ComposeBuilder from "../../src/builder/ComposeBuilder";

it('parses common.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/rt/common.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 2);
    assert.equal(unit.statements.length, 12);
    done();
}).timeout(5000);


it('parses tlfs.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/rt/tlfs.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 27);
    assert.equal(unit.statements.length, 16);
    done();
 }).timeout(5000);

it('parses rtrace.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/rt/rtrace.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 9);
    assert.equal(unit.statements.length, 0);
    done();
}).timeout(5000);

it('parses typeinfo.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/shared/typeinfo.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 2);
    assert.equal(unit.statements.length, 0);
    done();
}).timeout(5000);

it('parses stderrors.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/util/stderrors.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 1);
    assert.equal(unit.statements.length, 13);
    done();
}).timeout(5000);

it('parses error.cots',  (done) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const path = __dirname + "/runtime/util/error.cots";
    const unit = ComposeBuilder.parse_unit(path);
    assert.equal(unit.declarations.length, 1);
    assert.equal(unit.statements.length, 0);
    done();
}).timeout(5000);
