import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import AttributeDeclaration from "../../src/declaration/AttributeDeclaration";
import ClassDeclaration from "../../src/declaration/ClassDeclaration";
import AbstractMethodDeclaration from "../../src/declaration/AbstractMethodDeclaration";

it('parses an attribute declaration ',  () => {
    const unit = Builder.parse_unit("attr text: string");
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
    const unit = Builder.parse_unit("abstract fn Thing(): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractMethodDeclaration);
    assert.equal("Thing", unit.declarations[0].name);
    assert.equal(0, unit.declarations[0].parameters.length);
    assert.deepEqual(["string"], unit.declarations[0].returnTypes.map(t => t.typeName));
});

it('parses an abstract method declaration without param and multiple return types',  () => {
    const unit = Builder.parse_unit("abstract fn Thing(): string, boolean");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractMethodDeclaration);
    assert.equal("Thing", unit.declarations[0].name);
    assert.equal(0, unit.declarations[0].parameters.length);
    assert.deepEqual(["string", "boolean"], unit.declarations[0].returnTypes.map(t => t.typeName));
});

it('parses an abstract method declaration with attribute param and single return type',  () => {
    const unit = Builder.parse_unit("abstract fn Thing(name): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractMethodDeclaration);
    assert.equal("Thing", unit.declarations[0].name);
    assert.equal(1, unit.declarations[0].parameters.length);
    assert.equal("name", unit.declarations[0].parameters[0].name);
    assert.deepEqual(["string"], unit.declarations[0].returnTypes.map(t => t.typeName));
});
