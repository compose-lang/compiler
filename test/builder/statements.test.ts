import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import ReturnStatement from "../../src/statement/ReturnStatement.ts";
import IntegerLiteral from "../../src/literal/IntegerLiteral.ts";
import AssignInstanceStatement from "../../src/statement/AssignInstanceStatement.ts";
import DeclareInstanceStatement from "../../src/statement/DeclareInstanceStatement.ts";
import Int64Type from "../../src/type/Int64Type.ts";
import FunctionCallStatement from "../../src/statement/FunctionCallStatement.ts";
import OpCode from "../../src/compiler/OpCode.ts";
import ImportStatement from "../../src/module/ImportStatement.ts";
import IfStatement from "../../src/statement/IfStatement.ts";
import { assert, assertEquals } from "../../deps.ts";

Deno.test('parses a declare statement',  () => {
    const stmts = ComposeBuilder.parse_statement("const a = 2, b: i64 = 3;");
    assert(Array.isArray(stmts));
    assertEquals(stmts.length, 2);
    assert(stmts[0] instanceof DeclareInstanceStatement);
    assert(stmts[0].expression instanceof IntegerLiteral);
    assertEquals(stmts[0].expression.value, 2);
    assert(stmts[1] instanceof DeclareInstanceStatement);
    assertEquals(Int64Type.instance, stmts[1].type);
    assert(stmts[1].expression instanceof IntegerLiteral);
    assertEquals(stmts[1].expression.value, 3);
});

Deno.test('parses an assign statement',  () => {
    const stmt = ComposeBuilder.parse_statement("a = 2;");
    assert(stmt instanceof AssignInstanceStatement);
    assert(stmt.expression instanceof IntegerLiteral);
    assertEquals(stmt.expression.value, 2);
});

Deno.test('parses a return statement',  () => {
    const stmt = ComposeBuilder.parse_statement("return 2;");
    assert(stmt instanceof ReturnStatement);
    assert(stmt.expression instanceof IntegerLiteral);
    assertEquals(stmt.expression.value, 2);
});

Deno.test('parses a call statement',  () => {
    const stmt = ComposeBuilder.parse_statement("hello();");
    assert(stmt instanceof FunctionCallStatement);
    assertEquals(stmt.name, "hello");
});

Deno.test('parses an instruction',  () => {
    const instruction = ComposeBuilder.parse_instruction("i32.const 12;");
    assertEquals(instruction.opcode, OpCode.I32_CONST);
    assertEquals(instruction.variants.length, 1);
});

Deno.test('parses an import statement',  () => {
    const stmt = ComposeBuilder.parse_import('import Stuff, { Stuff1, Stuff2 } from "./Stuff";');
    assert(stmt instanceof ImportStatement);
    assertEquals(stmt.mainSymbol.value, "Stuff");
    assertEquals(stmt.childSymbols.map(id => id.value), [ "Stuff1", "Stuff2" ]);
    assertEquals(stmt.source.value, "./Stuff");
});

Deno.test('parses an if statement',  () => {
    const stmt = ComposeBuilder.parse_statement('if(c1) f1(); else if(c2) { f2(); ff2(); } else {}');
    assert(stmt instanceof IfStatement);
    assertEquals(stmt.blocks.length, 3);
    assert(stmt.blocks[0].condition);
    assertEquals(stmt.blocks[0].statements.length, 1);
    assert(stmt.blocks[1].condition);
    assertEquals(stmt.blocks[1].statements.length, 2);
    assert(!stmt.blocks[2].condition);
    assertEquals(stmt.blocks[2].statements.length, 0);
});
