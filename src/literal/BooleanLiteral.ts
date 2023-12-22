import LiteralBase from "./LiteralBase.ts";
import BooleanType from "../type/BooleanType.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "../expression/IResult.ts";

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
