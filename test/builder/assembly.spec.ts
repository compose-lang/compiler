import ComposeLexer from "../../src/parser/ComposeLexer";
import OpCode from "../../src/compiler/OpCode";
import * as assert from "assert";

const SYNTHETIC_TOKENS = new Set([ComposeLexer.SELECT_T])

it("reads literal from OpCode", () => {
    const opcode = OpCode;
    const names = Object.keys(opcode).filter( key => isNaN(Number(key)));
    names.forEach(name => {
        type t = keyof typeof ComposeLexer;
        const token = ComposeLexer[name as t] as number;
        assert.ok(token);
        if(!SYNTHETIC_TOKENS.has(token)) {
            const literal = ComposeLexer.literalNames[token];
            assert.ok(literal);
        }
    })
})
