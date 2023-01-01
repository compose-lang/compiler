import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import ComposeLexer from "../../src/parser/ComposeLexer";
import PreprocessedCharStream from "../../src/builder/PreprocessedCharStream";
import { Token } from "antlr4";

it("ignores directive text", () => {
    const code = "#if TRACE";
    const stream = new PreprocessedCharStream(code, new Map<string, boolean>());
    const lexer = new ComposeLexer(stream);
    const token = lexer.nextToken();
    assert.equal(token.type, Token.EOF);
});

it('parses declarations outside disabled directives',  () => {
    const code = `attribute text: string;
attribute name: string;`;
    const unit = Builder.parse_unit(code, new Map<string, boolean>([["TRACE", false]]));
    assert.equal(unit.declarations.length, 2);
});

it('skips declarations inside disabled directives',  () => {
    const code = `#if TRACE
attribute text: string;
#endif
attribute name: string;`
    const unit = Builder.parse_unit(code, new Map<string, boolean>([["TRACE", false]]));
    assert.equal(unit.declarations.length, 1);
});

it('parses declarations inside enabled directives',  () => {
    const code = `#if TRACE
attribute text: string;
#endif
attribute name: string;`
    const unit = Builder.parse_unit(code, new Map<string, boolean>([["TRACE", true]]));
    assert.equal(unit.declarations.length, 2);
});

it('parses declarations inside else if directives',  () => {
    const code = `#if TRACE
attribute text: string;
#else if TRACE2
attribute other: string;
#else if TRACE3
attribute other2: string;
#endif
attribute name: string;`
    const unit = Builder.parse_unit(code, new Map<string, boolean>([["TRACE2", true]]));
    assert.equal(unit.declarations.length, 2);
});

it('parses declarations inside else directives',  () => {
    const code = `#if TRACE
attribute text: string;
#else if TRACE2
attribute other: string;
#else
attribute other: string;
#endif
attribute name: string;`
    const unit = Builder.parse_unit(code, new Map<string, boolean>([["TRACE", false]]));
    assert.equal(unit.declarations.length, 2);
});

it('supports multi-level directives', () => {
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
    const unit = Builder.parse_unit(code, new Map<string, boolean>([["TRACE1", false], ["TRACE2", false], ["TRACE3", true]]));
    assert.equal(unit.declarations.length, 2);
    assert.equal(unit.declarations[0].name, "text3");
    assert.equal(unit.declarations[1].name, "text");
})
