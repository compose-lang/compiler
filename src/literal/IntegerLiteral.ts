import LiteralBase from "./LiteralBase";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Int32Type from "../type/Int32Type";
import Int64Type from "../type/Int64Type";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "../expression/IResult";
import FunctionBody from "../module/FunctionBody";

export default class IntegerLiteral extends LiteralBase<number> {

    public static parseInteger(text: string): number {
        let radix = 10;
        if(text[0] === "0") {
            if(text.length == 1)
                return 0;
            else {
                switch(text[1]) {
                    case 'x':
                    case 'X':
                        radix = 16;
                        text = text.substring(2);
                        break;
                    case 'b':
                    case 'B':
                        radix = 2;
                        text = text.substring(2);
                        break;
                    default:
                        radix = 8;
                        text = text.substring(1);
                }
            }
        }
        text = text.replace(/_/g, "");
        return parseInt(text, radix);
    }

    constructor(text: string) {
        super(text, IntegerLiteral.parseInteger(text));
    }

    toNative(): number {
        return this.value;
    }

    check(context: Context): IType {
        if(this.isI64())
            return Int64Type.instance;
        else
            return Int32Type.instance;
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        if(this.isI64())
            return { type: Int64Type.instance, ref: module.i64.const(this.value & 0xFFFFFFFF, this.value >> 32)}; // TODO deal with i64 literals
        else
            return { type: Int32Type.instance, ref: module.i32.const(this.value)};
    }

    private isI64() {
        return this.value < -2147483648 || this.value > 2147483647;
    }
}
