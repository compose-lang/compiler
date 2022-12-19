import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import InstanceExpression from "../../src/expression/InstanceExpression";
import FunctionCall from "../../src/expression/FunctionCall";

it('parses a variable',  () => {
    const exp = Builder.parse_expression("my_var");
    assert.ok(exp instanceof InstanceExpression);
    assert.equal("my_var", exp.name);
});

it('parses a simple function call',  () => {
    const exp = Builder.parse_expression("my_func()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal("my_func", exp.name);
});

it('parses a child function call',  () => {
    const exp = Builder.parse_expression("w.my_func()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal("my_func", exp.name);
});


it('parses a parameterized function call',  () => {
    const exp = Builder.parse_expression("my_func<x, y>()");
    assert.ok(exp instanceof FunctionCall);
    assert.equal("my_func", exp.name);
});

