import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import ReturnStatement from "../../src/statement/ReturnStatement";
import IntegerLiteral from "../../src/literal/IntegerLiteral";
import AssignInstanceStatement from "../../src/statement/AssignInstanceStatement";
import DeclareInstanceStatement from "../../src/statement/DeclareInstanceStatement";
import Int64Type from "../../src/type/Int64Type";
import FunctionCallStatement from "../../src/statement/FunctionCallStatement";

it('parses a declare statement',  () => {
    const stmts = Builder.parse_statement("const a = 2, b: i64 = 3;");
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
    const stmt = Builder.parse_statement("a = 2;");
    assert.ok(stmt instanceof AssignInstanceStatement);
    assert.ok(stmt.expression instanceof IntegerLiteral);
    assert.equal(stmt.expression.value, 2);
});

it('parses a return statement',  () => {
    const stmt = Builder.parse_statement("return 2;");
    assert.ok(stmt instanceof ReturnStatement);
    assert.ok(stmt.expression instanceof IntegerLiteral);
    assert.equal(stmt.expression.value, 2);
});

it('parses a call statement',  () => {
    const stmt = Builder.parse_statement("hello();");
    assert.ok(stmt instanceof FunctionCallStatement);
    assert.equal(stmt.name, "hello");
});

