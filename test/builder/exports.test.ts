import { assertEquals } from "../../deps.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";

Deno.test('exports child statement',  () => {
    const code = "export const Stuff1 = 35; const Stuff2 = 36;";
    const unit = ComposeBuilder.parse_unit(code);
    assertEquals(unit.declarations.length, 0);
    assertEquals(unit.statements.length, 2);
    assertEquals(unit.mainExport, null);
    assertEquals(unit.childExports.length, 1);
    assertEquals(unit.childExports[0], unit.statements[0]);
});

Deno.test('exports default statement',  () => {
    const code = "export default const Stuff1 = 35; const Stuff2 = 36;";
    const unit = ComposeBuilder.parse_unit(code);
    assertEquals(unit.declarations.length, 0);
    assertEquals(unit.statements.length, 2);
    assertEquals(unit.childExports.length, 0);
    assertEquals(unit.mainExport, unit.statements[0]);
});

Deno.test('exports child declaration',  () => {
    const code = "export class Stuff1{} class Stuff2{}";
    const unit = ComposeBuilder.parse_unit(code);
    assertEquals(unit.declarations.length, 2);
    assertEquals(unit.statements.length, 0);
    assertEquals(unit.mainExport, null);
    assertEquals(unit.childExports.length, 1);
    assertEquals(unit.childExports[0], unit.declarations[0]);
});

Deno.test('exports default declaration',  () => {
    const code = "export default class Stuff1{} class Stuff2{}";
    const unit = ComposeBuilder.parse_unit(code);
    assertEquals(unit.declarations.length, 2);
    assertEquals(unit.statements.length, 0);
    assertEquals(unit.mainExport, unit.declarations[0]);
});

Deno.test('reads import statement', () => {
    const code = 'import Stuff1, { Stuff2 } from "./Stuff";';
    const unit = ComposeBuilder.parse_unit(code);
    assertEquals(unit.imports.length, 1);
    const stmt = unit.imports[0];
    assertEquals(stmt.mainSymbol.value, "Stuff1");
    assertEquals(stmt.childSymbols.map(id => id.value), ["Stuff2"]);
})
