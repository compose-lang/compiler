import {assertTrue, assertEquals} from "../../deps.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import FunctionType from "../../src/type/FunctionType.ts";
import TupleType from "../../src/type/TupleType.ts";

Deno.test('parses prototype: () => void',  () => {
    const type = ComposeBuilder.parse_function_type("() => void");
    assertEquals(type.parameters.length, 0);
    assertEquals(type.returnType.typeName, "void");
});

Deno.test('parses prototype: (name: string) => void',  () => {
    const type = ComposeBuilder.parse_function_type("(name: string) => void");
    assertEquals(type.parameters.length, 1);
    assertEquals("name", type.parameters[0].name);
    assertEquals("string", type.parameters[0].type.typeName);
    assertEquals(type.returnType.typeName, "void");
});

Deno.test('parses prototype: (thing, name: string) => void',  () => {
    const type = ComposeBuilder.parse_function_type("(thing, name: string) => void");
    assertEquals(type.parameters.length, 2);
    assertEquals("thing", type.parameters[0].name);
    assertEquals("name", type.parameters[1].name);
    assertEquals("string", type.parameters[1].type.typeName);
    assertEquals(type.returnType.typeName, "void");
});

Deno.test('parses prototype: () => name',  () => {
    const type = ComposeBuilder.parse_function_type("() => name");
    assertEquals(type.parameters.length, 0);
    assertEquals(type.returnType.typeName, "name");
});

Deno.test('parses prototype: a => b',  () => {
    const type = ComposeBuilder.parse_function_type("a => b");
    assertEquals(type.parameters.length, 1);
    assertEquals("a", type.parameters[0].name);
    assertEquals(type.returnType.typeName, "b");
});

Deno.test('parses prototype: (a => b) => void',  () => {
    const type = ComposeBuilder.parse_function_type("(x: a => b) => void");
    assertEquals(type.parameters.length, 1);
    assertEquals("x", type.parameters[0].name);
    const type2 = type.parameters[0].type as FunctionType;
    assertEquals(type2.parameters.length, 1);
    assertEquals("a", type2.parameters[0].name);
    assertEquals(type2.returnType.typeName, "b");
    assertEquals(type.returnType.typeName, "void");
});

Deno.test('parses prototype: () => (a => b)',  () => {
    const type = ComposeBuilder.parse_function_type("() => (a => b)");
    assertEquals(type.parameters.length, 0);
    const type2 = type.returnType;
    assertTrue(type2 instanceof FunctionType);
    assertEquals(type2.parameters.length, 1);
    assertEquals("a", type2.parameters[0].name);
    assertEquals(type2.returnType.typeName, "b");
});

Deno.test('parses prototype: () => string, (a => b)',  () => {
    const type = ComposeBuilder.parse_function_type("() => string, (a => b)");
    assertEquals(type.parameters.length, 0);
    const multi = type.returnType;
    assertTrue(multi instanceof TupleType);
    const type2 = multi.types[1];
    assertTrue(type2 instanceof FunctionType);
    assertEquals(type2.parameters.length, 1);
    assertEquals("a", type2.parameters[0].name);
    assertEquals(type2.returnType.typeName, "b");
});

Deno.test('parses prototype: () => string, a => b',  () => {
    const type = ComposeBuilder.parse_function_type("() => string, a => b");
    assertEquals(type.parameters.length, 0);
    const multi = type.returnType;
    assertTrue(multi instanceof TupleType);
    const type2 = multi.types[1];
    assertTrue(type2 instanceof FunctionType);
    assertEquals(type2.parameters.length, 1);
    assertEquals("a", type2.parameters[0].name);
    assertEquals(type2.returnType.typeName, "b");
});

Deno.test('parses prototype: (x: a => b) => void',  () => {
    const type = ComposeBuilder.parse_function_type("(x: a => b) => void");
    assertEquals(type.parameters.length, 1);
    const type2 = type.parameters[0].type;
    assertTrue(type2 instanceof FunctionType);
    assertEquals(type2.parameters.length, 1);
    assertEquals("a", type2.parameters[0].name);
    assertEquals(type2.returnType.typeName, "b");
});

