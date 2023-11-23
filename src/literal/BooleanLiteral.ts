import LiteralBase from "./LiteralBase";
import BooleanType from "../type/BooleanType";
import IType from "../type/IType";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import OpCode from "../compiler/OpCode";
import CompilerFlags from "../compiler/CompilerFlags";

export default class BooleanLiteral extends LiteralBase<boolean> {

    constructor(text: string) {
        super(text, text === "true");
    }

    toNative(): boolean {
        return this.value;
    }

    check(context: Context): IType {
        return BooleanType.instance;
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IType {
        body.addOpCode(OpCode.I32_CONST, [ 0x01 ]);
        return BooleanType.instance;
    }
}
