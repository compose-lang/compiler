import ExpressionBase from "./ExpressionBase";
import Context from "../context/Context";
import IType from "../type/IType";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IDataType from "../type/IDataType";
import UInt32Type from "../type/UInt32Type";
import OpCode from "../compiler/OpCode";
import LEB128 from "../utils/LEB128";

export default class SizeofExpression extends ExpressionBase {

    type: IDataType;

    constructor(type: IDataType) {
        super();
        this.type = type;
    }

    check(context: Context): IType {
        return UInt32Type.instance;
    }

    declare(context: Context, module: WasmModule): void {
        // nothing to do
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        // nothing to do
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const bytes: number[] = [];
        LEB128.emitUnsigned(this.type.sizeof(), b => bytes.push(b));
        body.addOpCode(OpCode.I32_CONST, bytes);
        return UInt32Type.instance;
    }
}
