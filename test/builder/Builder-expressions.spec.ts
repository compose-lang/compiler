import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import InstanceExpression from "../../src/expression/InstanceExpression";

it('parses a variable',  () => {
    const exp = Builder.parse_expression("my_var");
    assert.ok(exp instanceof InstanceExpression);
    assert.equal("my_var", exp.name);
});
