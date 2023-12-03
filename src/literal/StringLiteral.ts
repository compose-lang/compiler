import LiteralBase from "./LiteralBase";
import Context from "../context/Context";
import IType from "../type/IType";
import StringType from "../type/StringType";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IResult from "../expression/IResult";
import CompilerFlags from "../compiler/CompilerFlags";
import binaryen from "binaryen";

type NewStringRef = (value: string) => typeof binaryen.stringref;
type NewStringConst = (module: WasmModule) => typeof binaryen.externref;
type SetStringConst = (module: WasmModule, ref: number, value: number) => typeof binaryen.externref;

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

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const new_string = binaryen["_BinaryenStringAsWTF16" as keyof typeof binaryen] as any as NewStringRef;
        const chars = new_string(this.value);
        const new_string_const = binaryen["_BinaryenStringConst" as keyof typeof binaryen] as any as NewStringConst;
        const value = new_string_const(module);
        const set_string_const = binaryen["_BinaryenStringConstSetString" as keyof typeof binaryen] as any as SetStringConst;
        const set = set_string_const(module, value, chars);
        const type = StringType.instance;
        return { ref: module.block(null, [chars, value, set], type.asType()), type };
    }

}
