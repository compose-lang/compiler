import Builder from "../../src/builder/Builder";
import * as assert from "assert";

it('parses a null literal',  () => {
    const exp = Builder.parse_expression("null");
    assert.ok(exp instanceof NullLiteral);
});
