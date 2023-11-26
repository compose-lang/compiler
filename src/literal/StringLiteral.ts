import LiteralBase from "./LiteralBase";
import Context from "../context/Context";
import IType from "../type/IType";
import StringType from "../type/StringType";
import WasmModule from "../module/wasm/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";

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
