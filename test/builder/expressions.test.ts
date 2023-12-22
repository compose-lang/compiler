import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import UnresolvedIdentifierExpression from "../../src/expression/UnresolvedIdentifierExpression.ts";
import FunctionCall from "../../src/expression/FunctionCall.ts";
import BinaryExpression from "../../src/expression/BinaryExpression.ts";
import BinaryOperator from "../../src/expression/BinaryOperator.ts";
import { assert, assertEquals } from "../../deps.ts";

Deno.test('parses a variable',  () => {
    const exp = ComposeBuilder.parse_expression("my_var");
    assert(exp instanceof UnresolvedIdentifierExpression);
    assertEquals(exp.name, "my_var");
});

Deno.test('parses a simple function call',  () => {
    const exp = ComposeBuilder.parse_expression("my_func()");
    assert(exp instanceof FunctionCall);
    assertEquals(exp.name, "my_func");
});

Deno.test('parses a child function call',  () => {
    const exp = ComposeBuilder.parse_expression("w.my_func()");
    assert(exp instanceof FunctionCall);
    assertEquals(exp.name, "my_func");
});


Deno.test('parses a parameterized function call',  () => {
    const exp = ComposeBuilder.parse_expression("my_func<X, Y>()");
    assert(exp instanceof FunctionCall);
    assertEquals(exp.name, "my_func");
});

Deno.test('parses a plus expression',  () => {
    const exp = ComposeBuilder.parse_expression("a + 2");
    assert(exp instanceof BinaryExpression);
    assertEquals(exp.operator, BinaryOperator.PLUS);
});

