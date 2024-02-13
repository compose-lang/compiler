import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import {assertEquals, assertTrue} from "../../src/platform/deno/AssertUtils.ts";
import ClassDeclaration from "../../src/declaration/ClassDeclaration.ts";
import {fileURLToPath} from "../../src/platform/deno/URLUtils.ts";
import {dirname} from "../../src/platform/deno/FileUtils.ts";
import {FileStream} from "../../src/platform/deno/Antlr4FileStream.ts";

Deno.test('parses String class',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const unitPath = __dirname + "/runtime/core/String.cots";
    const unit = ComposeBuilder.parse_unit_stream(new FileStream(unitPath));
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    assertTrue(unit.declarations[0] instanceof ClassDeclaration);
    assertEquals(unit.declarations[0].name, "String");
});


Deno.test('parses Array class',  () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(dirname(dirname(__filename)));
    const unitPath = __dirname + "/runtime/core/Array.cots";
    const unit = ComposeBuilder.parse_unit_stream(new FileStream(unitPath));
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    assertTrue(unit.declarations[0] instanceof ClassDeclaration);
    assertEquals(unit.declarations[0].name, "Array");
});
