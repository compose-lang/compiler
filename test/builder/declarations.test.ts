import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import AttributeDeclaration from "../../src/declaration/AttributeDeclaration.ts";
import ClassDeclaration from "../../src/declaration/ClassDeclaration.ts";
import AbstractFunctionDeclaration from "../../src/declaration/AbstractFunctionDeclaration.ts";
import ConcreteFunctionDeclaration from "../../src/declaration/ConcreteFunctionDeclaration.ts";
import ReturnStatement from "../../src/statement/ReturnStatement.ts";
import IntegerLiteral from "../../src/literal/IntegerLiteral.ts";
import TupleType from "../../src/type/TupleType.ts";
import NativeFunctionDeclaration from "../../src/declaration/NativeFunctionDeclaration.ts";
import FunctionCall from "../../src/expression/FunctionCall.ts";
import Accessibility from "../../src/declaration/Accessibility.ts";
import Int32Type from "../../src/type/Int32Type.ts";
import RestParameter from "../../src/parameter/RestParameter.ts";
import { assertTrue, assertEquals } from "../../deps.ts";
import RecordDeclaration from "../../src/declaration/RecordDeclaration.ts";


Deno.test('parses an attribute declaration ',  () => {
    const unit = ComposeBuilder.parse_unit_data("attribute text: string;");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    assertTrue(unit.declarations[0] instanceof AttributeDeclaration);
    assertEquals(unit.declarations[0].name, "text");
    assertEquals(unit.declarations[0].type.typeName, "string");
});

Deno.test('parses a record declaration', () => {
    const unit = ComposeBuilder.parse_unit_data("record Thing(a, b) extends C, D;");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    assertTrue(unit.declarations[0] instanceof RecordDeclaration);
    assertEquals(unit.declarations[0].name, "Thing");
    assertEquals(unit.declarations[0].attributes.map(a => a.value), ["a", "b"]);
    assertEquals(unit.declarations[0].parents.map(a => a.value), ["C", "D"]);
});

Deno.test('parses a class declaration ',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Thing(a, b) extends C, D {}");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    assertTrue(unit.declarations[0] instanceof ClassDeclaration);
    assertEquals(unit.declarations[0].name, "Thing");
    assertEquals(unit.declarations[0].attributes.map(a => a.value), ["a", "b"]);
    assertEquals(unit.declarations[0].parents.map(a => a.value), ["C", "D"]);
});

Deno.test('parses a class declaration with annotations',  () => {
    const unit = ComposeBuilder.parse_unit_data("@ModuleExport @Inline class Thing(a, b) extends C, D {}");
    assertTrue(unit);
    const decl = unit.declarations[0];
    assertEquals(decl.annotations.length, 2);
    assertEquals(decl.annotations[0].name, "@ModuleExport");
    assertEquals(decl.annotations[1].name, "@Inline");
});

Deno.test('parses an abstract function declaration without param and single return type',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Stuff { abstract Thing(): string; }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const decl = unit.declarations[0];
    assertTrue(decl instanceof ClassDeclaration);
    assertEquals(decl.name, "Stuff");
    assertEquals(decl.functions.length, 1);
    const func = decl.functions[0];
    assertTrue(func instanceof AbstractFunctionDeclaration);
    assertEquals(func.name, "Thing");
    assertEquals(func.parameters.length, 0);
    assertEquals(func.returnType.typeName, "string");
});

Deno.test('parses an abstract function declaration without param and multiple return types',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Stuff { abstract Thing(): string, boolean; }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const decl = unit.declarations[0];
    assertTrue(decl instanceof ClassDeclaration);
    assertEquals(decl.name, "Stuff");
    assertEquals(decl.functions.length, 1);
    const func = decl.functions[0];
    assertTrue(func instanceof AbstractFunctionDeclaration);
    assertEquals(func.name, "Thing");
    assertEquals(func.parameters.length, 0);
    assertTrue(func.returnType instanceof TupleType);
    assertEquals(func.returnType.types.map(t => t.typeName), ["string", "boolean"]);
});

Deno.test('parses an abstract function declaration with attribute param and single return type',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Stuff { abstract Thing(name): string; }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const decl = unit.declarations[0];
    assertTrue(decl instanceof ClassDeclaration);
    assertEquals(decl.name, "Stuff");
    assertEquals(decl.functions.length, 1);
    const func = decl.functions[0];
    assertTrue(func instanceof AbstractFunctionDeclaration);
    assertEquals(func.name, "Thing");
    assertEquals(func.parameters.length, 1);
    assertEquals(func.parameters[0].name, "name");
    assertEquals(func.returnType.typeName, "string");
});

Deno.test('parses an abstract function declaration with typed param and single return type',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Stuff { abstract Thing(name: string): string; }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    const decl = unit.declarations[0];
    assertTrue(decl instanceof ClassDeclaration);
    assertEquals(decl.name, "Stuff");
    assertEquals(decl.functions.length, 1);
    const func = decl.functions[0];
    assertTrue(func instanceof AbstractFunctionDeclaration);
    assertEquals(func.name, "Thing");
    assertEquals(func.parameters.length, 1);
    assertEquals(func.parameters[0].name, "name");
    assertEquals(func.parameters[0].type.typeName, "string");
    assertEquals(func.returnType.typeName, "string");
});

Deno.test('parses a concrete function declaration with a return statement',  () => {
    const unit = ComposeBuilder.parse_unit_data("function Thing() { return 2; }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assertTrue(declaration instanceof ConcreteFunctionDeclaration);
    assertEquals(declaration.name, "Thing");
    assertEquals(declaration.returnType, null);
    assertEquals(declaration.statements.length, 1);
    const statement = declaration.statements[0];
    assertTrue(statement instanceof ReturnStatement);
    assertTrue(statement.expression instanceof IntegerLiteral)
    assertEquals(statement.expression.value, 2);
});

Deno.test('parses a parameterized function declaration',  () => {
    const unit = ComposeBuilder.parse_unit_data("function Thing<T>() { return 2; }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assertTrue(declaration instanceof ConcreteFunctionDeclaration);
    assertEquals(declaration.name, "Thing");
    assertEquals(declaration.generics.length, 1)
    assertEquals(declaration.generics[0].name, "T");
    assertEquals(declaration.returnType, null);
    assertEquals(declaration.statements.length, 1);
});

Deno.test('parses a static member function declaration',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Thing { static sm() { return 2; } }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assertTrue(declaration instanceof ClassDeclaration);
    assertEquals(declaration.name, "Thing");
    assertEquals(declaration.functions.length,  1);
    const method = declaration.functions[0];
    assertEquals(method.name, "sm");
    assertTrue(method.isStatic);
});


Deno.test('parses a native function declaration',  () => {
    const unit = ComposeBuilder.parse_unit_data("native function sm(): i32 { i32.const 2; }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assertTrue(declaration instanceof NativeFunctionDeclaration);
    assertEquals(declaration.name, "sm");
});

Deno.test('parses a native member function declaration',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Thing { static native sm(): i32 { i32.const 2; } }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const declaration = unit.declarations[0];
    assertTrue(declaration instanceof ClassDeclaration);
    assertEquals(declaration.name, "Thing");
    assertEquals(declaration.functions.length,  1);
    const method = declaration.functions[0];
    assertTrue(method instanceof NativeFunctionDeclaration);
    assertEquals(method.name, "sm");
    assertTrue(method.isStatic);
});

Deno.test('parses a static member function call',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Thing { static sm(): i32 { return 12; } } function Stuff() { return Thing.sm(); }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 2);
    const klass = unit.declarations[0];
    assertTrue(klass instanceof ClassDeclaration);
    assertEquals(klass.name, "Thing");
    assertEquals(klass.functions.length,  1);
    const method = klass.functions[0];
    assertTrue(method instanceof ConcreteFunctionDeclaration);
    assertEquals(method.name, "sm");
    assertTrue(method.isStatic);
    const method2 = unit.declarations[1];
    assertTrue(method2 instanceof ConcreteFunctionDeclaration);
    assertEquals(method2.name, "Stuff");
    assertEquals(method2.statements.length, 1);
    const stmt = method2.statements[0];
    assertTrue(stmt instanceof ReturnStatement);
    const exp = stmt.expression;
    assertTrue(exp instanceof FunctionCall);
});

Deno.test('parses class fields',  () => {
    const unit = ComposeBuilder.parse_unit_data("class Thing { static thing1: i32; private thing2: string; }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const klass = unit.declarations[0];
    assertTrue(klass instanceof ClassDeclaration);
    assertEquals(klass.name, "Thing");
    assertEquals(klass.fields.length,  2);
    let field = klass.fields[0];
    assertEquals(field.name, "thing1");
    assertTrue(field.isStatic);
    field = klass.fields[1];
    assertEquals(field.name, "thing2");
    assertTrue(!field.isStatic);
    assertTrue(field.accessibility == Accessibility.PRIVATE);
});

Deno.test('parses rest parameters',  () => {
    const unit = ComposeBuilder.parse_unit_data("function Thing( x: i32, y: i32, ...z: i32[] ): void { }");
    assertTrue(unit);
    assertEquals(unit.declarations.length, 1);
    const func = unit.declarations[0];
    assertTrue(func instanceof ConcreteFunctionDeclaration);
    assertEquals(func.name, "Thing");
    assertEquals(func.parameters.length,  3);
    const param = func.parameters[2];
    assertEquals(param.name, "z");
    assertTrue(param instanceof RestParameter);
    assertEquals(param.atomicType, Int32Type.instance);
});


