import ComposeBuilder from "../../src/builder/ComposeBuilder";
import * as assert from "assert";
import ReturnStatement from "../../src/statement/ReturnStatement";
import IntegerLiteral from "../../src/literal/IntegerLiteral";
import AssignInstanceStatement from "../../src/statement/AssignInstanceStatement";
import DeclareInstanceStatement from "../../src/statement/DeclareInstanceStatement";
import Int64Type from "../../src/type/Int64Type";
import FunctionCallStatement from "../../src/statement/FunctionCallStatement";
import OpCode from "../../src/compiler/OpCode";
import ImportStatement from "../../src/module/ImportStatement";
import IfStatement from "../../src/statement/IfStatement";

it('parses a declare statement',  () => {
    const stmts = ComposeBuilder.parse_statement("const a = 2, b: i64 = 3;");
    assert.ok(Array.isArray(stmts));
    assert.equal(stmts.length, 2);
    assert.ok(stmts[0] instanceof DeclareInstanceStatement);
    assert.ok(stmts[0].expression instanceof IntegerLiteral);
    assert.equal(stmts[0].expression.value, 2);
    assert.ok(stmts[1] instanceof DeclareInstanceStatement);
    assert.equal(Int64Type.instance, stmts[1].type);
    assert.ok(stmts[1].expression instanceof IntegerLiteral);
    assert.equal(stmts[1].expression.value, 3);
});

it('parses an assign statement',  () => {
    const stmt = ComposeBuilder.parse_statement("a = 2;");
    assert.ok(stmt instanceof AssignInstanceStatement);
    assert.ok(stmt.expression instanceof IntegerLiteral);
    assert.equal(stmt.expression.value, 2);
});

it('parses a return statement',  () => {
    const stmt = ComposeBuilder.parse_statement("return 2;");
    assert.ok(stmt instanceof ReturnStatement);
    assert.ok(stmt.expression instanceof IntegerLiteral);
    assert.equal(stmt.expression.value, 2);
});

it('parses a call statement',  () => {
    const stmt = ComposeBuilder.parse_statement("hello();");
    assert.ok(stmt instanceof FunctionCallStatement);
    assert.equal(stmt.name, "hello");
});

it('parses an instruction',  () => {
    const instruction = ComposeBuilder.parse_instruction("i32.const 12;");
    assert.equal(instruction.opcode, OpCode.I32_CONST);
    assert.equal(instruction.variants.length, 1);
});

it('parses an import statement',  () => {
    const stmt = ComposeBuilder.parse_import('import Stuff, { Stuff1, Stuff2 } from "./Stuff";');
    assert.ok(stmt instanceof ImportStatement);
    assert.equal(stmt.mainSymbol.value, "Stuff");
    assert.deepEqual(stmt.childSymbols.map(id => id.value), [ "Stuff1", "Stuff2" ]);
    assert.equal(stmt.source.value, "./Stuff");
});

it('parses an if statement',  () => {
    const stmt = ComposeBuilder.parse_statement('if(c1) f1(); else if(c2) { f2(); ff2(); } else {}');
    assert.ok(stmt instanceof IfStatement);
    assert.equal(stmt.blocks.length, 3);
    assert.ok(stmt.blocks[0].condition);
    assert.equal(stmt.blocks[0].statements.length, 1);
    assert.ok(stmt.blocks[1].condition);
    assert.equal(stmt.blocks[1].statements.length, 2);
    assert.ok(!stmt.blocks[2].condition);
    assert.equal(stmt.blocks[2].statements.length, 0);
});
