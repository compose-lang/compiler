import ExpressionBase from "./ExpressionBase";
import Context from "../context/Context";
import IType from "../type/IType";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IValueType from "../type/IValueType";
import UInt32Type from "../type/UInt32Type";
import OpCode from "../compiler/OpCode";
import LEB128 from "../utils/LEB128";
import CompilerFlags from "../compiler/CompilerFlags";

export default class AlignofExpression extends ExpressionBase {

    type: IValueType;

    constructor(type: IValueType) {
        super();
        this.type = type;
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
        LEB128.emitUnsigned(this.type.alignof(), b => bytes.push(b));
        body.addOpCode(OpCode.I32_CONST, bytes);
        return UInt32Type.instance;
    }
}
