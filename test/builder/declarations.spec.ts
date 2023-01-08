import ComposeBuilder from "../../src/builder/ComposeBuilder";
import * as assert from "assert";
import AttributeDeclaration from "../../src/declaration/AttributeDeclaration";
import ClassDeclaration from "../../src/declaration/ClassDeclaration";
import AbstractFunctionDeclaration from "../../src/declaration/AbstractFunctionDeclaration";
import ConcreteFunctionDeclaration from "../../src/declaration/ConcreteFunctionDeclaration";
import ReturnStatement from "../../src/statement/ReturnStatement";
import IntegerLiteral from "../../src/literal/IntegerLiteral";
import MultiType from "../../src/type/MultiType";
import NativeFunctionDeclaration from "../../src/declaration/NativeFunctionDeclaration";
import FunctionCall from "../../src/expression/FunctionCall";
import Accessibility from "../../src/declaration/Accessibility";
import Int32Type from "../../src/type/Int32Type";
import RestParameter from "../../src/parameter/RestParameter";


it('parses an attribute declaration ',  () => {
    const unit = ComposeBuilder.parse_unit("attribute text: string;");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AttributeDeclaration);
    assert.equal(unit.declarations[0].name, "text");
    assert.equal(unit.declarations[0].type.typeName, "string");
});

it('parses a class declaration ',  () => {
    const unit = ComposeBuilder.parse_unit("class Thing(a, b) extends C, D {}");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof ClassDeclaration);
    assert.equal(unit.declarations[0].name, "Thing");
    assert.deepEqual(unit.declarations[0].attributes.map(a => a.value), ["a", "b"]);
    assert.deepEqual(unit.declarations[0].parents.map(a => a.value), ["C", "D"]);
});

it('parses a class declaration with annotations',  () => {
    const unit = ComposeBuilder.parse_unit("@ModuleExport @Inline class Thing(a, b) extends C, D {}");
    const decl = unit.declarations[0];
    assert.equal(decl.annotations.length, 2);
    assert.equal(decl.annotations[0].name, "@ModuleExport");
    assert.equal(decl.annotations[1].name, "@Inline");
});

it('parses an abstract function declaration without param and single return type',  () => {
    const unit = ComposeBuilder.parse_unit("class Stuff { abstract Thing(): string; }");
    assert.equal(unit.declarations.length, 1);
    const decl = unit.declarations[0];
    assert.ok(decl instanceof ClassDeclaration);
    assert.equal(decl.name, "Stuff");
    assert.equal(decl.functions.length, 1);
    const func = decl.functions[0];
    assert.ok(func instanceof AbstractFunctionDeclaration);
    assert.equal(func.name, "Thing");
    assert.equal(func.parameters.length, 0);
    assert.equal(func.returnType.typeName, "string");
});

it('parses an abstract function declaration without param and multiple return types',  () => {
    const unit = ComposeBuilder.parse_unit("class Stuff { abstract Thing(): string, boolean; }");
    assert.equal(unit.declarations.length, 1);
    const decl = unit.declarations[0];
    assert.ok(decl instanceof ClassDeclaration);
    assert.equal(decl.name, "Stuff");
    assert.equal(decl.functions.length, 1);
    const func = decl.functions[0];
    assert.ok(func instanceof AbstractFunctionDeclaration);
    assert.equal(func.name, "Thing");
    assert.equal(func.parameters.length, 0);
    assert.ok(func.returnType instanceof MultiType);
    assert.deepEqual(func.returnType.types.map(t => t.typeName), ["string", "boolean"]);
});

it('parses an abstract function declaration with attribute param and single return type',  () => {
    const unit = ComposeBuilder.parse_unit("class Stuff { abstract Thing(name): string; }");
    assert.equal(unit.declarations.length, 1);
    const decl = unit.declarations[0];
    assert.ok(decl instanceof ClassDeclaration);
    assert.equal(decl.name, "Stuff");
    assert.equal(decl.functions.length, 1);
    const func = decl.functions[0];
    assert.ok(func instanceof AbstractFunctionDeclaration);
    assert.equal(func.name, "Thing");
    assert.equal(func.parameters.length, 1);
    assert.equal(func.parameters[0].name, "name");
    assert.equal(func.returnType.typeName, "string");
});

it('parses an abstract function declaration with typed param and single return type',  () => {
    const unit = ComposeBuilder.parse_unit("class Stuff { abstract Thing(name: string): string; }");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    const decl = unit.declarations[0];
    assert.ok(decl instanceof ClassDeclaration);
    assert.equal(decl.name, "Stuff");
    assert.equal(decl.functions.length, 1);
    const func = decl.functions[0];
    assert.ok(func instanceof AbstractFunctionDeclaration);
    assert.equal(func.name, "Thing");
    assert.equal(func.parameters.length, 1);
    assert.equal(func.parameters[0].name, "name");
    assert.equal(func.parameters[0].type.typeName, "string");
    assert.equal(func.returnType.typeName, "string");
});

it('parses a concrete function declaration with a return statement',  () => {
    const unit = ComposeBuilder.parse_unit("function Thing() { return 2; }");
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
    const unit = ComposeBuilder.parse_unit("function Thing<T>() { return 2; }");
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
    const unit = ComposeBuilder.parse_unit("class Thing { static sm() { return 2; } }");
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
    const unit = ComposeBuilder.parse_unit("native function sm(): i32 { i32.const 2; }");
    assert.equal(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assert.ok(declaration instanceof NativeFunctionDeclaration);
    assert.equal(declaration.name, "sm");
});

it('parses a native member function declaration',  () => {
    const unit = ComposeBuilder.parse_unit("class Thing { static native sm(): i32 { i32.const 2; } }");
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

it('parses a static member function call',  () => {
    const unit = ComposeBuilder.parse_unit("class Thing { static sm(): i32 { return 12; } } function Stuff() { return Thing.sm(); }");
    assert.equal(unit.declarations.length, 2);
    const klass = unit.declarations[0];
    assert.ok(klass instanceof ClassDeclaration);
    assert.equal(klass.name, "Thing");
    assert.equal(klass.functions.length,  1);
    const method = klass.functions[0];
    assert.ok(method instanceof ConcreteFunctionDeclaration);
    assert.equal(method.name, "sm");
    assert.ok(method.isStatic);
    const method2 = unit.declarations[1];
    assert.ok(method2 instanceof ConcreteFunctionDeclaration);
    assert.equal(method2.name, "Stuff");
    assert.equal(method2.statements.length, 1);
    const stmt = method2.statements[0];
    assert.ok(stmt instanceof ReturnStatement);
    const exp = stmt.expression;
    assert.ok(exp instanceof FunctionCall);
});

it('parses class fields',  () => {
    const unit = ComposeBuilder.parse_unit("class Thing { static thing1: i32; private thing2: string; }");
    assert.equal(unit.declarations.length, 1);
    const klass = unit.declarations[0];
    assert.ok(klass instanceof ClassDeclaration);
    assert.equal(klass.name, "Thing");
    assert.equal(klass.fields.length,  2);
    let field = klass.fields[0];
    assert.equal(field.name, "thing1");
    assert.ok(field.isStatic);
    field = klass.fields[1];
    assert.equal(field.name, "thing2");
    assert.ok(!field.isStatic);
    assert.ok(field.accessibility == Accessibility.PRIVATE);
});

it('parses rest parameters',  () => {
    const unit = ComposeBuilder.parse_unit("function Thing( x: i32, y: i32, ...z: i32[] ): void { }");
    assert.equal(unit.declarations.length, 1);
    const func = unit.declarations[0];
    assert.ok(func instanceof ConcreteFunctionDeclaration);
    assert.equal(func.name, "Thing");
    assert.equal(func.parameters.length,  3);
    const param = func.parameters[2];
    assert.equal(param.name, "z");
    assert.ok(param instanceof RestParameter);
    assert.equal(param.atomicType, Int32Type.instance);
});
