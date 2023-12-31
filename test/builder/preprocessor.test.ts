import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import ComposeLexer from "../../src/parser/ComposeLexer.ts";
import { Token, CharStream } from "npm:antlr4";
import { assertEquals } from "../../deps.ts";
import preprocessedStream from "../../src/builder/PreprocessedStream.ts";

Deno.test('ignores directive text', () => {
    const code = "#if TRACE";
    const stream = preprocessedStream(new CharStream(code), new Map<string, boolean>());
    const lexer = new ComposeLexer(stream);
    const token = lexer.nextToken();
    assertEquals(token.type, Token.EOF);
});

Deno.test('parses declarations outside disabled directives',  () => {
    const code = `attribute text: string;
attribute name: string;`;
    const unit = ComposeBuilder.parse_unit_data(code, new Map<string, boolean>([["TRACE", false]]));
    assertEquals(unit.declarations.length, 2);
});

Deno.test('skips declarations inside disabled directives',  () => {
    const code = `#if TRACE
attribute text: string;
#endif
attribute name: string;`
    const unit = ComposeBuilder.parse_unit_data(code, new Map<string, boolean>([["TRACE", false]]));
    assertEquals(unit.declarations.length, 1);
});

Deno.test('parses declarations inside enabled directives',  () => {
    const code = `#if TRACE
attribute text: string;
#endif
attribute name: string;`
    const unit = ComposeBuilder.parse_unit_data(code, new Map<string, boolean>([["TRACE", true]]));
    assertEquals(unit.declarations.length, 2);
});

Deno.test('parses declarations inside else if directives',  () => {
    const code = `#if TRACE
attribute text: string;
#else if TRACE2
attribute other: string;
#else if TRACE3
attribute other2: string;
#endif
attribute name: string;`
    const unit = ComposeBuilder.parse_unit_data(code, new Map<string, boolean>([["TRACE2", true]]));
    assertEquals(unit.declarations.length, 2);
});

Deno.test('parses declarations inside else directives',  () => {
    const code = `#if TRACE
attribute text: string;
#else if TRACE2
attribute other: string;
#else
attribute other: string;
#endif
attribute name: string;`
    const unit = ComposeBuilder.parse_unit_data(code, new Map<string, boolean>([["TRACE", false]]));
    assertEquals(unit.declarations.length, 2);
});

Deno.test('supports multi-level directives', () => {
    const code = `#if TRACE1
attribute text1: string;
#else
#if TRACE2
attribute text2: string;
#elif TRACE3
attribute text3: string;
#endif TRACE2
#endif TRACE1
attribute text: string;`
    const unit = ComposeBuilder.parse_unit_data(code, new Map<string, boolean>([["TRACE1", false], ["TRACE2", false], ["TRACE3", true]]));
    assertEquals(unit.declarations.length, 2);
    assertEquals(unit.declarations[0].name, "text3");
    assertEquals(unit.declarations[1].name, "text");
})
