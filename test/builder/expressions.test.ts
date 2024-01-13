import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import UnresolvedIdentifierExpression from "../../src/expression/UnresolvedIdentifierExpression.ts";
import FunctionCall from "../../src/expression/FunctionCall.ts";
import BinaryExpression from "../../src/expression/BinaryExpression.ts";
import BinaryOperator from "../../src/expression/BinaryOperator.ts";
import { assertTrue, assertEquals } from "../../deps.ts";
import ItemExpression from "../../src/expression/ItemExpression.ts";

Deno.test('parses a variable',  () => {
    const exp = ComposeBuilder.parse_expression("my_var");
    assertTrue(exp instanceof UnresolvedIdentifierExpression);
    assertEquals(exp.name, "my_var");
});

Deno.test('parses a simple function call',  () => {
    const exp = ComposeBuilder.parse_expression("my_func()");
    assertTrue(exp instanceof FunctionCall);
    assertEquals(exp.name, "my_func");
});

Deno.test('parses a child function call',  () => {
    const exp = ComposeBuilder.parse_expression("w.my_func()");
    assertTrue(exp instanceof FunctionCall);
    assertEquals(exp.name, "my_func");
});


Deno.test('parses a parameterized function call',  () => {
    const exp = ComposeBuilder.parse_expression("my_func<X, Y>()");
    assertTrue(exp instanceof FunctionCall);
    assertEquals(exp.name, "my_func");
});

Deno.test('parses a plus expression',  () => {
    const exp = ComposeBuilder.parse_expression("a + 2");
    assertTrue(exp instanceof BinaryExpression);
    assertEquals(exp.operator, BinaryOperator.PLUS);
});

Deno.test('parses an array item expression',  () => {
    const exp = ComposeBuilder.parse_expression("a[2]");
    assertTrue(exp instanceof ItemExpression);
});
