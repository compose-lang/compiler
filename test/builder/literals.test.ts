import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import NullLiteral from "../../src/literal/NullLiteral.ts";
import BooleanLiteral from "../../src/literal/BooleanLiteral.ts";
import IntegerLiteral from "../../src/literal/IntegerLiteral.ts";
import DecimalLiteral from "../../src/literal/DecimalLiteral.ts";
import CharLiteral from "../../src/literal/CharLiteral.ts";
import StringLiteral from "../../src/literal/StringLiteral.ts";
import ArrayLiteral from "../../src/literal/ArrayLiteral.ts";
import SetLiteral from "../../src/literal/SetLiteral.ts";
import MapLiteral from "../../src/literal/MapLiteral.ts";
import { assertTrue, assertEquals } from "../../deps.ts";

Deno.test('parses a null literal',  () => {
    const exp = ComposeBuilder.parse_expression("null");
    assertTrue(exp instanceof NullLiteral);
});

Deno.test('parses a boolean literal',  () => {
    let exp = ComposeBuilder.parse_expression("true");
    assertTrue(exp instanceof BooleanLiteral);
    assertEquals(exp.value, true);
    exp = ComposeBuilder.parse_expression("false");
    assertTrue(exp instanceof BooleanLiteral);
    assertEquals(exp.value, false);
});

Deno.test('parses an integer literal',  () => {
    // short decimal
    let exp = ComposeBuilder.parse_expression("123");
    assertTrue(exp instanceof IntegerLiteral);
    assertEquals(exp.value, 123);
    // short hexadecimal
    exp = ComposeBuilder.parse_expression("0x12");
    assertTrue(exp instanceof IntegerLiteral);
    assertEquals(exp.value, 18);
    // short octal
    exp = ComposeBuilder.parse_expression("012");
    assertTrue(exp instanceof IntegerLiteral);
    assertEquals(exp.value, 10);
    // short binary
    exp = ComposeBuilder.parse_expression("0b10");
    assertTrue(exp instanceof IntegerLiteral);
    assertEquals(exp.value, 2);
    // long decimal
    exp = ComposeBuilder.parse_expression("6_666_666_666");
    assertTrue(exp instanceof IntegerLiteral);
    assertEquals(exp.value, 6_666_666_666);
    // long hexadecimal
    exp = ComposeBuilder.parse_expression("0x1212121212121212");
    assertTrue(exp instanceof IntegerLiteral);
    assertEquals(exp.value, 0x1212121212121212);
});

Deno.test('parses a decimal literal',  () => {
    let exp = ComposeBuilder.parse_expression("123.4");
    assertTrue(exp instanceof DecimalLiteral);
    assertEquals(exp.value, 123.4);
    exp = ComposeBuilder.parse_expression("123.4e3");
    assertTrue(exp instanceof DecimalLiteral);
    assertEquals(exp.value, 123_400.0);
    // TODO support hexadecimal floats
    // exp = Builder.parse_expression("0x12.04");
    // assertTrue(exp instanceof DecimalLiteral);
    // assertEquals(exp.value, 123.4);
});

Deno.test('parses a character literal',  () => {
    const exp = ComposeBuilder.parse_expression("'1'");
    assertTrue(exp instanceof CharLiteral);
    assertEquals(exp.value, "1");
});

Deno.test('parses a string literal',  () => {
    const exp = ComposeBuilder.parse_expression('"123"');
    assertTrue(exp instanceof StringLiteral);
    assertEquals(exp.value, "123");
});

Deno.test('parses a list literal',  () => {
    const exp = ComposeBuilder.parse_expression("[ 123, 'a', \"xyz\", 12.47, true, false, null ]");
    assertTrue(exp instanceof ArrayLiteral);
    assertEquals(exp.toNative(), [ 123, 'a', "xyz", 12.47, true, false, null ]);
});

Deno.test('parses a set literal',  () => {
    const exp = ComposeBuilder.parse_expression("< 123, 'a', \"xyz\", 12.47, true, false, null >");
    assertTrue(exp instanceof SetLiteral);
    assertEquals(exp.toNative(), new Set([ 123, 'a', "xyz", 12.47, true, false, null ]));
});

Deno.test('parses a map literal',  () => {
    const exp = ComposeBuilder.parse_expression("{ x: 123, y: true }");
    assertTrue(exp instanceof MapLiteral);
    assertEquals(exp.toNative(), new Map<string, any>([ ["x", 123], ["y", true] ]));
});


