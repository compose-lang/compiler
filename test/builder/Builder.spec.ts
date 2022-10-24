import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import AttributeDeclaration from "../../src/declaration/AttributeDeclaration";
import ClassDeclaration from "../../src/declaration/ClassDeclaration";

it('parses an attribute declaration ',  () => {
    const unit = Builder.parse_unit("attr text: string");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof AttributeDeclaration);
});

it('parses a class declaration ',  () => {
    const unit = Builder.parse_unit("class Thing(a, b) extends C, D {}");
    assert.equal(unit.declarations.length, 1);
    assert.ok(unit.declarations[0] instanceof ClassDeclaration);
});

