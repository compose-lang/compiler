import ComposeBuilder from "../../src/builder/ComposeBuilder";
import * as assert from "assert";
import FunctionType from "../../src/type/FunctionType";
import MultiType from "../../src/type/MultiType";

it('parses prototype: () => void',  () => {
    const type = ComposeBuilder.parse_function_type("() => void");
    assert.equal(type.parameters.length, 0);
    assert.equal(type.returnType.typeName, "void");
});

it('parses prototype: (name: string) => void',  () => {
    const type = ComposeBuilder.parse_function_type("(name: string) => void");
    assert.equal(type.parameters.length, 1);
    assert.equal("name", type.parameters[0].name);
    assert.equal("string", type.parameters[0].type.typeName);
    assert.equal(type.returnType.typeName, "void");
});

it('parses prototype: (thing, name: string) => void',  () => {
    const type = ComposeBuilder.parse_function_type("(thing, name: string) => void");
    assert.equal(type.parameters.length, 2);
    assert.equal("thing", type.parameters[0].name);
    assert.equal("name", type.parameters[1].name);
    assert.equal("string", type.parameters[1].type.typeName);
    assert.equal(type.returnType.typeName, "void");
});

it('parses prototype: () => name',  () => {
    const type = ComposeBuilder.parse_function_type("() => name");
    assert.equal(type.parameters.length, 0);
    assert.equal(type.returnType.typeName, "name");
});

it('parses prototype: a => b',  () => {
    const type = ComposeBuilder.parse_function_type("a => b");
    assert.equal(type.parameters.length, 1);
    assert.equal("a", type.parameters[0].name);
    assert.equal(type.returnType.typeName, "b");
});

it('parses prototype: (a => b) => void',  () => {
    const type = ComposeBuilder.parse_function_type("(x: a => b) => void");
    assert.equal(type.parameters.length, 1);
    assert.equal("x", type.parameters[0].name);
    const type2 = type.parameters[0].type as FunctionType;
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.equal(type2.returnType.typeName, "b");
    assert.equal(type.returnType.typeName, "void");
});

it('parses prototype: () => (a => b)',  () => {
    const type = ComposeBuilder.parse_function_type("() => (a => b)");
    assert.equal(type.parameters.length, 0);
    const type2 = type.returnType;
    assert.ok(type2 instanceof FunctionType);
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.equal(type2.returnType.typeName, "b");
});

it('parses prototype: () => string, (a => b)',  () => {
    const type = ComposeBuilder.parse_function_type("() => string, (a => b)");
    assert.equal(type.parameters.length, 0);
    const multi = type.returnType;
    assert.ok(multi instanceof MultiType);
    const type2 = multi.types[1];
    assert.ok(type2 instanceof FunctionType);
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.equal(type2.returnType.typeName, "b");
});

it('parses prototype: () => string, a => b',  () => {
    const type = ComposeBuilder.parse_function_type("() => string, a => b");
    assert.equal(type.parameters.length, 0);
    const multi = type.returnType;
    assert.ok(multi instanceof MultiType);
    const type2 = multi.types[1];
    assert.ok(type2 instanceof FunctionType);
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.equal(type2.returnType.typeName, "b");
});

it('parses prototype: (x: a => b) => void',  () => {
    const type = ComposeBuilder.parse_function_type("(x: a => b) => void");
    assert.equal(type.parameters.length, 1);
    const type2 = type.parameters[0].type;
    assert.ok(type2 instanceof FunctionType);
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.equal(type2.returnType.typeName, "b");
});

