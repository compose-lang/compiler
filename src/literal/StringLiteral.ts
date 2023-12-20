import LiteralBase from "./LiteralBase.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import StringType from "../type/StringType.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";

export default class StringLiteral extends LiteralBase<string> {

    constructor(text: string) {
        super(text, text.substring(1, text.length - 1));
    }

    toNative(): string {
        return this.value;
    }

    check(context: Context): IType {
        return StringType.instance;
    }
/*
    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const index = module.getDataSection()
        return super.compile(context, module, body);
    }
*/
}
