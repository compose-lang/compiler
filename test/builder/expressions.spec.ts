import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import InstanceExpression from "../../src/expression/InstanceExpression";
import FunctionCall from "../../src/expression/FunctionCall";
import BinaryExpression from "../../src/expression/BinaryExpression";
import Operator from "../../src/expression/Operator";

it('parses a variable',  () => {
    const exp = Builder.parse_expression("my_var");
    assert.ok(exp instanceof InstanceExpression);
    assert.equal(exp.name, "my_var");
});

it('parses a simple function call',  () => {
    const exp = Builder.parse_expression("my_func()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal(exp.name, "my_func");
});

it('parses a child function call',  () => {
    const exp = Builder.parse_expression("w.my_func()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal(exp.name, "my_func");
});


it('parses a parameterized function call',  () => {
    const exp = Builder.parse_expression("my_func<X, Y>()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal(exp.name, "my_func");
});

it('parses a plus expression',  () => {
    const exp = Builder.parse_expression("a + 2");
    assert.ok(exp instanceof BinaryExpression);
    assert.equal(exp.operator, Operator.PLUS);
});

