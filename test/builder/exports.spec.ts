import * as assert from "assert";
import Builder from "../../src/builder/Builder";

it('exports statement',  () => {
    const code = "export const Stuff1 = 35; const Stuff2 = 36;";
    const unit = Builder.parse_unit(code);
    assert.equal(unit.declarations.length, 0);
    assert.equal(unit.statements.length, 2);
    assert.equal(unit.childExports.length, 1);
    assert.equal(unit.childExports[0], unit.statements[0]);
});


it('exports declaration',  () => {
    const code = "export class Stuff1{} class Stuff2{}";
    const unit = Builder.parse_unit(code);
    assert.equal(unit.declarations.length, 2);
    assert.equal(unit.statements.length, 0);
    assert.equal(unit.childExports.length, 1);
    assert.equal(unit.childExports[0], unit.declarations[0]);
});

it('exports default declaration',  () => {
    const code = "export default class Stuff1{} class Stuff2{}";
    const unit = Builder.parse_unit(code);
    assert.equal(unit.declarations.length, 2);
    assert.equal(unit.statements.length, 0);
    assert.equal(unit.mainExport, unit.declarations[0]);
});

it("imports statement", () => {
    const code = 'import Stuff1, { Stuff2 } from "./Stuff";';
    const unit = Builder.parse_unit(code);
    assert.equal(unit.imports.length, 1);
    const stmt = unit.imports[0];
    assert.equal(stmt.mainSymbol.value, "Stuff1");
    assert.deepEqual(stmt.childSymbols.map(id => id.value), ["Stuff2"]);
})
