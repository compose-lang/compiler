import LiteralBase from "./LiteralBase";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionCode from "../module/FunctionCode";
import OpCode from "../compiler/OpCode";
import LEB128 from "../utils/LEB128";

export default class IntegerLiteral extends LiteralBase<number> {

    public static parseInteger(text: string): number {
        if(text[0] === "0") {
            switch(text[1]) {
                case 'x':
                case 'X':
                    return parseInt(text.substring(2), 16);
                case 'b':
                case 'B':
                    return parseInt(text.substring(2), 2);
                default:
                    return parseInt(text.substring(1), 8);
            }
        } else {
            text = text.replace(/_/g, "");
            return parseInt(text);
        }
    }

    constructor(text: string) {
        super(text, IntegerLiteral.parseInteger(text));
    }

    toNative(): number {
        return this.value;
    }

    compile(context: Context, module: WasmModule, body: FunctionCode): void {
        const bytes: number[] = [];
        LEB128.emitSigned(this.value, byte => bytes.push(byte));
        if(this.value >= -2147483648 && this.value <= 2147483647)
            body.addOpCode(OpCode.CONST_I32, bytes);
        else
            body.addOpCode(OpCode.CONST_I64, bytes);
    }


}
