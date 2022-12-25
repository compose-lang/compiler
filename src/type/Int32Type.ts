import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import IType from "./IType";
import UInt32Type from "./UInt32Type";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import OpCode from "../compiler/OpCode";

export default class Int32Type extends IntegerType {

    static instance = new Int32Type();

    private constructor() {
        super("i32");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(rightType == this || rightType == UInt32Type.instance)
            return this;
        else
            return super.checkAdd(context, rightType, tryReverse);
    }

    compileAdd(context: Context, rightType: IType, module: WasmModule, body: FunctionBody, tryReverse: boolean): IType {
        if(rightType == this) {
            body.addOpCode(OpCode.I32_ADD);
            return this;
        } else
            return super.compileAdd(context, rightType, module, body, tryReverse);
    }

}
