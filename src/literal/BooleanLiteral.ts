import LiteralBase from "./LiteralBase";
import BooleanType from "../type/BooleanType";
import IType from "../type/IType";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "../expression/IResult";

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

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        return { ref: module.i32.const(1), type: BooleanType.instance };
    }
}
