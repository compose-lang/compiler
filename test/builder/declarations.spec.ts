import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import AttributeDeclaration from "../../src/declaration/AttributeDeclaration";
import ClassDeclaration from "../../src/declaration/ClassDeclaration";
import AbstractFunctionDeclaration from "../../src/declaration/AbstractMethodDeclaration";
import ConcreteFunctionDeclaration from "../../src/declaration/ConcreteMethodDeclaration";
import ReturnStatement from "../../src/statement/ReturnStatement";
import IntegerLiteral from "../../src/literal/IntegerLiteral";

it('parses an attribute declaration ',  () => {
    const unit = Builder.parse_unit("attribute text: string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AttributeDeclaration);
    assert.equal(unit.declarations[0].name, "text");
    assert.equal(unit.declarations[0].type.typeName, "string");
});

it('parses a class declaration ',  () => {
    const unit = Builder.parse_unit("class Thing(a, b) extends C, D {}");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof ClassDeclaration);
    assert.equal(unit.declarations[0].name, "Thing");
    assert.deepEqual(unit.declarations[0].attributes.map(a => a.value), ["a", "b"]);
    assert.deepEqual(unit.declarations[0].parents.map(a => a.value), ["C", "D"]);

});

it('parses an abstract method declaration without param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractFunctionDeclaration);
    assert.equal(unit.declarations[0].name, "Thing");
    assert.equal(unit.declarations[0].parameters.length, 0);
    assert.deepEqual(unit.declarations[0].returnTypes.map(t => t.typeName), ["string"]);
});

it('parses an abstract method declaration without param and multiple return types',  () => {
    const unit = Builder.parse_unit("abstract function Thing(): string, boolean");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractFunctionDeclaration);
    assert.equal(unit.declarations[0].name, "Thing");
    assert.equal(unit.declarations[0].parameters.length, 0);
    assert.deepEqual(unit.declarations[0].returnTypes.map(t => t.typeName), ["string", "boolean"]);
});

it('parses an abstract method declaration with attribute param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(name): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractFunctionDeclaration);
    assert.equal(unit.declarations[0].name, "Thing");
    assert.equal(unit.declarations[0].parameters.length, 1);
    assert.equal(unit.declarations[0].parameters[0].name, "name");
    assert.deepEqual(unit.declarations[0].returnTypes.map(t => t.typeName), ["string"]);
});

it('parses an abstract method declaration with typed param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(name: string): string");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof AbstractFunctionDeclaration);
    assert.equal(declaration.name, "Thing");
    assert.equal(declaration.parameters.length, 1);
    assert.equal(declaration.parameters[0].name, "name");
    assert.equal(declaration.parameters[0].type.typeName, "string");
    assert.deepEqual(declaration.returnTypes.map(t => t.typeName), ["string"]);
});

it('parses a concrete method declaration with a return statement',  () => {
    const unit = Builder.parse_unit("function Thing() { return 2; }");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof ConcreteFunctionDeclaration);
    assert.equal(declaration.name, "Thing");
    assert.equal(declaration.returnTypes.length, 0);
    assert.equal(declaration.statements.length, 1);
    const statement = declaration.statements[0];
    assert.ok(statement instanceof ReturnStatement);
    assert.ok(statement.expression instanceof IntegerLiteral)
    assert.equal(statement.expression.value, 2);
});
