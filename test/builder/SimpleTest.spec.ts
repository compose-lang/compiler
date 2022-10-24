import Builder from "../../src/builder/Builder";
import * as assert from "assert";
import AttributeDeclaration from "../../src/declaration/AttributeDeclaration";

it('parses an attribute declaration ',  () => {
    const unit = Builder.parse_unit("attribute text: string");
    assert.equal(unit.declarations.length, 1);
    console.assert(unit.declarations[0] instanceof AttributeDeclaration);
}); 