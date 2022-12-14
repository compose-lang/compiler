import LEB128 from "../../src/utils/LEB128";
import * as assert from "assert";

it("properly encodes uint 0",  () => {
    const bytes: number[] = [];
    LEB128.emitUnsigned(0, byte => bytes.push(byte));
    assert.equal(bytes.length, 1);
    assert.equal(bytes[0], 0);
});

it("properly encodes uint 7",  () => {
    const bytes: number[] = [];
    LEB128.emitUnsigned(7, byte => bytes.push(byte));
    assert.equal(bytes.length, 1);
    assert.equal(bytes[0], 7);
});

it("properly encodes uint 624485",  () => {
    const bytes: number[] = [];
    LEB128.emitUnsigned(624485, byte => bytes.push(byte));
    assert.equal(bytes.length, 3);
    assert.equal(bytes[0], 0xE5);
    assert.equal(bytes[1], 0x8E);
    assert.equal(bytes[2], 0x26);
});
