import ComposeBuilder from "../../src/builder/ComposeBuilder";
import * as assert from "assert";
import UnresolvedIdentifierExpression from "../../src/expression/UnresolvedIdentifierExpression";
import FunctionCall from "../../src/expression/FunctionCall";
import BinaryExpression from "../../src/expression/BinaryExpression";
import BinaryOperator from "../../src/expression/Operator";

it('parses a variable',  () => {
    const exp = ComposeBuilder.parse_expression("my_var");
    assert.ok(exp instanceof UnresolvedIdentifierExpression);
    assert.equal(exp.name, "my_var");
});

it('parses a simple function call',  () => {
    const exp = ComposeBuilder.parse_expression("my_func()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal(exp.name, "my_func");
});

it('parses a child function call',  () => {
    const exp = ComposeBuilder.parse_expression("w.my_func()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal(exp.name, "my_func");
});


it('parses a parameterized function call',  () => {
    const exp = ComposeBuilder.parse_expression("my_func<X, Y>()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal(exp.name, "my_func");
});

it('parses a plus expression',  () => {
    const exp = ComposeBuilder.parse_expression("a + 2");
    assert.ok(exp instanceof BinaryExpression);
    assert.equal(exp.operator, BinaryOperator.PLUS);
});

