import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import AttributeDeclaration from "../../src/declaration/AttributeDeclaration";
import ClassDeclaration from "../../src/declaration/ClassDeclaration";
import AbstractFunctionDeclaration from "../../src/declaration/AbstractFunctionDeclaration";
import ConcreteFunctionDeclaration from "../../src/declaration/ConcreteFunctionDeclaration";
import ReturnStatement from "../../src/statement/ReturnStatement";
import IntegerLiteral from "../../src/literal/IntegerLiteral";
import MultiType from "../../src/type/MultiType";
import NativeFunctionDeclaration from "../../src/declaration/NativeMethodDeclaration";
import OpCode from "../../src/compiler/OpCode";

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

it('parses a class declaration with annotations',  () => {
    const unit = Builder.parse_unit("@Export @Inline class Thing(a, b) extends C, D {}");
    const decl = unit.declarations[0];
    assert.equal(decl.annotations.length, 2);
    assert.equal(decl.annotations[0].name, "@Export");
    assert.equal(decl.annotations[1].name, "@Inline");
});

it('parses an abstract function declaration without param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractFunctionDeclaration);
    assert.equal(unit.declarations[0].name, "Thing");
    assert.equal(unit.declarations[0].parameters.length, 0);
    assert.equal(unit.declarations[0].returnType.typeName, "string");
});

it('parses an abstract function declaration without param and multiple return types',  () => {
    const unit = Builder.parse_unit("abstract function Thing(): string, boolean");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof AbstractFunctionDeclaration);
    assert.equal(declaration.name, "Thing");
    assert.equal(declaration.parameters.length, 0);
    assert.ok(declaration.returnType instanceof MultiType);
    assert.deepEqual(declaration.returnType.types.map(t => t.typeName), ["string", "boolean"]);
});

it('parses an abstract function declaration with attribute param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(name): string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AbstractFunctionDeclaration);
    assert.equal(unit.declarations[0].name, "Thing");
    assert.equal(unit.declarations[0].parameters.length, 1);
    assert.equal(unit.declarations[0].parameters[0].name, "name");
    assert.equal(unit.declarations[0].returnType.typeName, "string");
});

it('parses an abstract function declaration with typed param and single return type',  () => {
    const unit = Builder.parse_unit("abstract function Thing(name: string): string");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof AbstractFunctionDeclaration);
    assert.equal(declaration.name, "Thing");
    assert.equal(declaration.parameters.length, 1);
    assert.equal(declaration.parameters[0].name, "name");
    assert.equal(declaration.parameters[0].type.typeName, "string");
    assert.equal(declaration.returnType.typeName, "string");
});

it('parses a concrete function declaration with a return statement',  () => {
    const unit = Builder.parse_unit("function Thing() { return 2; }");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof ConcreteFunctionDeclaration);
    assert.equal(declaration.name, "Thing");
    assert.equal(declaration.returnType, null);
    assert.equal(declaration.statements.length, 1);
    const statement = declaration.statements[0];
    assert.ok(statement instanceof ReturnStatement);
    assert.ok(statement.expression instanceof IntegerLiteral)
    assert.equal(statement.expression.value, 2);
});

it('parses a parameterized function declaration',  () => {
    const unit = Builder.parse_unit("function Thing<T>() { return 2; }");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof ConcreteFunctionDeclaration);
    assert.equal(declaration.name, "Thing");
    assert.equal(declaration.generics.length, 1)
    assert.equal(declaration.generics[0].name, "T");
    assert.equal(declaration.returnType, null);
    assert.equal(declaration.statements.length, 1);
});

it('parses a static member function declaration',  () => {
    const unit = Builder.parse_unit("class Thing { static function sm() { return 2; } }");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof ClassDeclaration);
    assert.equal(declaration.name, "Thing");
    assert.equal(declaration.functions.length,  1);
    const method = declaration.functions[0];
    assert.equal(method.name, "sm");
    assert.ok(method.isStatic);
});


it('parses a native function declaration',  () => {
    const unit = Builder.parse_unit("native function sm(): i32 { i32.const 2 }");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof NativeFunctionDeclaration);
    assert.equal(declaration.name, "sm");
});

it('parses a native member function declaration',  () => {
    const unit = Builder.parse_unit("class Thing { static native function sm(): i32 { i32.const 2 } }");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof ClassDeclaration);
    assert.equal(declaration.name, "Thing");
    assert.equal(declaration.functions.length,  1);
    const method = declaration.functions[0];
    assert.ok(method instanceof NativeFunctionDeclaration);
    assert.equal(method.name, "sm");
    assert.ok(method.isStatic);
});

