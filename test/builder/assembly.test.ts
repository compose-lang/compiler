import ComposeLexer from "../../src/parser/ComposeLexer.ts";
import OpCode from "../../src/compiler/OpCode.ts";
import { assertTrue } from "../../deps.ts";

const SYNTHETIC_TOKENS = new Set([ComposeLexer.SELECT_T])

Deno.test("reads literal from OpCode", () => {
    const opcode = OpCode;
    const names = Object.keys(opcode).filter( key => isNaN(Number(key)));
    names.forEach(name => {
        type t = keyof typeof ComposeLexer;
        const token = ComposeLexer[name as t] as number;
        assertTrue(token);
        if(!SYNTHETIC_TOKENS.has(token)) {
            const literal = ComposeLexer.literalNames[token];
            assertTrue(literal);
        }
    })
})
