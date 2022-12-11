import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import NullLiteral from "../../src/literal/NullLiteral";
import BooleanLiteral from "../../src/literal/BooleanLiteral";
import IntegerLiteral from "../../src/literal/IntegerLiteral";
import DecimalLiteral from "../../src/literal/DecimalLiteral";
import CharLiteral from "../../src/literal/CharLiteral";
import StringLiteral from "../../src/literal/StringLiteral";
import ListLiteral from "../../src/literal/ListLiteral";
import SetLiteral from "../../src/literal/SetLiteral";
import MapLiteral from "../../src/literal/MapLiteral";

it('parses a null literal',  () => {
    const exp = Builder.parse_expression("null");
    assert.ok(exp instanceof NullLiteral);
});

it('parses a boolean literal',  () => {
    let exp = Builder.parse_expression("true");
    assert.ok(exp instanceof BooleanLiteral);
    assert.equal(exp.value, true);
    exp = Builder.parse_expression("false");
    assert.ok(exp instanceof BooleanLiteral);
    assert.equal(exp.value, false);
});

it('parses an integer literal',  () => {
    // short decimal
    let exp = Builder.parse_expression("123");
    assert.ok(exp instanceof IntegerLiteral);
    assert.equal(exp.value, 123);
    // short hexadecimal
    exp = Builder.parse_expression("0x12");
    assert.ok(exp instanceof IntegerLiteral);
    assert.equal(exp.value, 18);
    // short octal
    exp = Builder.parse_expression("012");
    assert.ok(exp instanceof IntegerLiteral);
    assert.equal(exp.value, 10);
    // short binary
    exp = Builder.parse_expression("0b10");
    assert.ok(exp instanceof IntegerLiteral);
    assert.equal(exp.value, 2);
    // long decimal
    exp = Builder.parse_expression("6_666_666_666");
    assert.ok(exp instanceof IntegerLiteral);
    assert.equal(exp.value, 6_666_666_666);
    // long hexadecimal
    exp = Builder.parse_expression("0x1212121212121212");
    assert.ok(exp instanceof IntegerLiteral);
    assert.equal(exp.value, 0x1212121212121212);
});

it('parses a decimal literal',  () => {
    let exp = Builder.parse_expression("123.4");
    assert.ok(exp instanceof DecimalLiteral);
    assert.equal(exp.value, 123.4);
    exp = Builder.parse_expression("123.4e3");
    assert.ok(exp instanceof DecimalLiteral);
    assert.equal(exp.value, 123_400.0);
    // TODO support hexadecimal floats
    // exp = Builder.parse_expression("0x12.04");
    // assert.ok(exp instanceof DecimalLiteral);
    // assert.equal(exp.value, 123.4);
});

it('parses a character literal',  () => {
    const exp = Builder.parse_expression("'1'");
    assert.ok(exp instanceof CharLiteral);
    assert.equal(exp.value, "1");
});

it('parses a string literal',  () => {
    const exp = Builder.parse_expression('"123"');
    assert.ok(exp instanceof StringLiteral);
    assert.equal(exp.value, "123");
});

it('parses a list literal',  () => {
    const exp = Builder.parse_expression("[ 123, 'a', \"xyz\", 12.47, true, false, null ]");
    assert.ok(exp instanceof ListLiteral);
    assert.deepEqual(exp.toNative(), [ 123, 'a', "xyz", 12.47, true, false, null ]);
});

it('parses a set literal',  () => {
    const exp = Builder.parse_expression("< 123, 'a', \"xyz\", 12.47, true, false, null >");
    assert.ok(exp instanceof SetLiteral);
    assert.deepEqual(exp.toNative(), new Set([ 123, 'a', "xyz", 12.47, true, false, null ]));
});

it('parses a map literal',  () => {
    const exp = Builder.parse_expression("{ x: 123, y: true }");
    assert.ok(exp instanceof MapLiteral);
    assert.deepEqual(exp.toNative(), new Map<string, any>([ ["x", 123], ["y", true] ]));
});


