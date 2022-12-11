import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import ReturnStatement from "../../src/statement/ReturnStatement";
import IntegerLiteral from "../../src/literal/IntegerLiteral";

it('parses a return statement',  () => {
    const stmt = Builder.parse_statement("return 2;");
    assert.ok(stmt instanceof ReturnStatement);
    assert.ok(stmt.expression instanceof IntegerLiteral);
    assert.equal(stmt.expression.value, 2);
});
