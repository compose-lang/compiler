import ExpressionBase from "./ExpressionBase";
import Context from "../context/Context";
import IType from "../type/IType";
import UInt32Type from "../type/UInt32Type";
import WasmModule from "../module/wasm/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import LEB128 from "../utils/LEB128";
import OpCode from "../compiler/OpCode";
import ClassType from "../type/ClassType";
import Identifier from "../builder/Identifier";
import CompilerFlags from "../compiler/CompilerFlags";

export default class OffsetofExpression extends ExpressionBase {

    type: ClassType;
    member: Identifier;

    constructor(type: ClassType, member: Identifier) {
        super();
        this.type = type;
        this.member = member;
    }

    check(context: Context): IType {
        return UInt32Type.instance;
    }

    isConst(context: Context): boolean {
        return true;
    }

    declare(context: Context, module: WasmModule): void {
        // nothing to do
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        // nothing to do
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IType {
        const bytes: number[] = [];
        LEB128.emitUnsigned(this.type.offsetof(this.member), b => bytes.push(b));
        body.addOpCode(OpCode.I32_CONST, bytes);
        return UInt32Type.instance;
    }

}
