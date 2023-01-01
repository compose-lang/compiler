import * as assert from "assert";
import ComposeBuilder from "../../src/builder/ComposeBuilder";

it('exports child statement',  () => {
    const code = "export const Stuff1 = 35; const Stuff2 = 36;";
    const unit = ComposeBuilder.parse_unit(code);
    assert.equal(unit.declarations.length, 0);
    assert.equal(unit.statements.length, 2);
    assert.equal(unit.mainExport, null);
    assert.equal(unit.childExports.length, 1);
    assert.equal(unit.childExports[0], unit.statements[0]);
});

it('exports default statement',  () => {
    const code = "export default const Stuff1 = 35; const Stuff2 = 36;";
    const unit = ComposeBuilder.parse_unit(code);
    assert.equal(unit.declarations.length, 0);
    assert.equal(unit.statements.length, 2);
    assert.equal(unit.childExports, 0);
    assert.equal(unit.mainExport, unit.statements[0]);
});

it('exports child declaration',  () => {
    const code = "export class Stuff1{} class Stuff2{}";
    const unit = ComposeBuilder.parse_unit(code);
    assert.equal(unit.declarations.length, 2);
    assert.equal(unit.statements.length, 0);
    assert.equal(unit.mainExport, null);
    assert.equal(unit.childExports.length, 1);
    assert.equal(unit.childExports[0], unit.declarations[0]);
});

it('exports default declaration',  () => {
    const code = "export default class Stuff1{} class Stuff2{}";
    const unit = ComposeBuilder.parse_unit(code);
    assert.equal(unit.declarations.length, 2);
    assert.equal(unit.statements.length, 0);
    assert.equal(unit.mainExport, unit.declarations[0]);
});

it("reads import statement", () => {
    const code = 'import Stuff1, { Stuff2 } from "./Stuff";';
    const unit = ComposeBuilder.parse_unit(code);
    assert.equal(unit.imports.length, 1);
    const stmt = unit.imports[0];
    assert.equal(stmt.mainSymbol.value, "Stuff1");
    assert.deepEqual(stmt.childSymbols.map(id => id.value), ["Stuff2"]);
})
