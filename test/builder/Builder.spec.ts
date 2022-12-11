import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import AttributeDeclaration from "../../src/declaration/AttributeDeclaration";
import ClassDeclaration from "../../src/declaration/ClassDeclaration";
import AbstractMethodDeclaration from "../../src/declaration/AbstractMethodDeclaration";
import MethodType from "../../src/type/MethodType";

it('parses an attribute declaration ',  () => {
    const unit = Builder.parse_unit("attribute text: string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AttributeDeclaration);
    assert.equal("text", unit.declarations[0].name);
    assert.equal("string", unit.declarations[0].type.typeName);
});

it('parses a class declaration ',  () => {
    const unit = Builder.parse_unit("class Thing(a, b) extends C, D {}");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof ClassDeclaration);
    assert.equal("Thing", unit.declarations[0].name);
    assert.deepEqual(["a", "b"], unit.declarations[0].attributes.map(a => a.value));
    assert.deepEqual(["C", "D"], unit.declarations[0].parents.map(a => a.value));

});

it('parses an abstract method declaration without param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractMethodDeclaration);
    assert.equal("Thing", unit.declarations[0].name);
    assert.equal(0, unit.declarations[0].parameters.length);
    assert.deepEqual(["string"], unit.declarations[0].returnTypes.map(t => t.typeName));
});

it('parses an abstract method declaration without param and multiple return types',  () => {
    const unit = Builder.parse_unit("abstract function Thing(): string, boolean");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractMethodDeclaration);
    assert.equal("Thing", unit.declarations[0].name);
    assert.equal(0, unit.declarations[0].parameters.length);
    assert.deepEqual(["string", "boolean"], unit.declarations[0].returnTypes.map(t => t.typeName));
});

it('parses an abstract method declaration with attribute param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(name): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractMethodDeclaration);
    assert.equal("Thing", unit.declarations[0].name);
    assert.equal(1, unit.declarations[0].parameters.length);
    assert.equal("name", unit.declarations[0].parameters[0].name);
    assert.deepEqual(["string"], unit.declarations[0].returnTypes.map(t => t.typeName));
});

it('parses an abstract method declaration with typed param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(name: string): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractMethodDeclaration);
    assert.equal("Thing", unit.declarations[0].name);
    assert.equal(1, unit.declarations[0].parameters.length);
    assert.equal("name", unit.declarations[0].parameters[0].name);
    assert.equal("string", unit.declarations[0].parameters[0].type.typeName);
    assert.deepEqual(["string"], unit.declarations[0].returnTypes.map(t => t.typeName));
});

it('parses prototype: () => void',  () => {
    const type = Builder.parse_method_type("() => void");
    assert.equal(type.parameters.length, 0);
    assert.deepEqual(["void"], type.returnTypes.map(t => t.typeName));
});

it('parses prototype: (name: string) => void',  () => {
    const type = Builder.parse_method_type("(name: string) => void");
    assert.equal(type.parameters.length, 1);
    assert.equal("name", type.parameters[0].name);
    assert.equal("string", type.parameters[0].type.typeName);
    assert.deepEqual(["void"], type.returnTypes.map(t => t.typeName));
});

it('parses prototype: (thing, name: string) => void',  () => {
    const type = Builder.parse_method_type("(thing, name: string) => void");
    assert.equal(type.parameters.length, 2);
    assert.equal("thing", type.parameters[0].name);
    assert.equal("name", type.parameters[1].name);
    assert.equal("string", type.parameters[1].type.typeName);
    assert.deepEqual(["void"], type.returnTypes.map(t => t.typeName));
});

it('parses prototype: () => name',  () => {
    const type = Builder.parse_method_type("() => name");
    assert.equal(type.parameters.length, 0);
    assert.deepEqual(["name"], type.returnTypes.map(t => t.typeName));
});

it('parses prototype: a => b',  () => {
    const type = Builder.parse_method_type("a => b");
    assert.equal(type.parameters.length, 1);
    assert.equal("a", type.parameters[0].name);
    assert.deepEqual(["b"], type.returnTypes.map(t => t.typeName));
});

it('parses prototype: (a => b) => void',  () => {
    const type = Builder.parse_method_type("(x: a => b) => void");
    assert.equal(type.parameters.length, 1);
    assert.equal("x", type.parameters[0].name);
    const type2 = type.parameters[0].type as MethodType;
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.deepEqual(["b"], type2.returnTypes.map(t => t.typeName));
    assert.deepEqual(["void"], type.returnTypes.map(t => t.typeName));
});

it('parses prototype: () => (a => b)',  () => {
    const type = Builder.parse_method_type("() => (a => b)");
    assert.equal(type.parameters.length, 0);
    const type2 = type.returnTypes[0];
    assert.ok(type2 instanceof MethodType);
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.deepEqual(["b"], type2.returnTypes.map(t => t.typeName));
});

it('parses prototype: () => string, (a => b)',  () => {
    const type = Builder.parse_method_type("() => string, (a => b)");
    assert.equal(type.parameters.length, 0);
    const type2 = type.returnTypes[1];
    assert.ok(type2 instanceof MethodType);
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.deepEqual(["b"], type2.returnTypes.map(t => t.typeName));
});

it('parses prototype: () => string, a => b',  () => {
    const type = Builder.parse_method_type("() => string, a => b");
    assert.equal(type.parameters.length, 0);
    const type2 = type.returnTypes[1];
    assert.ok(type2 instanceof MethodType);
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.deepEqual(["b"], type2.returnTypes.map(t => t.typeName));
});

it('parses prototype: (x: a => b) => void',  () => {
    const type = Builder.parse_method_type("(x: a => b) => void");
    assert.equal(type.parameters.length, 1);
    const type2 = type.parameters[0].type;
    assert.ok(type2 instanceof MethodType);
    assert.equal(type2.parameters.length, 1);
    assert.equal("a", type2.parameters[0].name);
    assert.deepEqual(["b"], type2.returnTypes.map(t => t.typeName));
});
