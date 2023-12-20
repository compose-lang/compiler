import LEB128 from "../../src/utils/LEB128.ts";

it("properly encodes uint 0",  () => {
    const bytes: number[] = [];
    LEB128.emitUnsigned(0, byte => bytes.push(byte));
    assertEquals(bytes.length, 1);
    assertEquals(bytes[0], 0);
});

it("properly encodes uint 1",  () => {
    const bytes: number[] = [];
    LEB128.emitUnsigned(1, byte => bytes.push(byte));
    assertEquals(bytes.length, 1);
    assertEquals(bytes[0], 1);
});

it("properly encodes uint 2",  () => {
    const bytes: number[] = [];
    LEB128.emitUnsigned(2, byte => bytes.push(byte));
    assertEquals(bytes.length, 1);
    assertEquals(bytes[0], 2);
});

it("properly encodes uint 7F",  () => {
    const bytes: number[] = [];
    LEB128.emitUnsigned(0x7F, byte => bytes.push(byte));
    assertEquals(bytes.length, 1);
    assertEquals(bytes[0], 0x7F);
});

it("properly encodes uint 624485",  () => {
    const bytes: number[] = [];
    LEB128.emitUnsigned(624485, byte => bytes.push(byte));
    assertEquals(bytes.length, 3);
    assertEquals(bytes[0], 0xE5);
    assertEquals(bytes[1], 0x8E);
    assertEquals(bytes[2], 0x26);
});

it("properly encodes int -123456",  () => {
    const bytes: number[] = [];
    LEB128.emitSigned(-123456, byte => bytes.push(byte));
    assertEquals(bytes.length, 3);
    assertEquals(bytes[0], 0xC0);
    assertEquals(bytes[1], 0xBB);
    assertEquals(bytes[2], 0x78);
});
