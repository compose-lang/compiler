import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import Context from "../context/Context";
import IType from "./IType";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import OpCode from "../compiler/OpCode";

export default class Int32Type extends IntegerType {

    static instance = new Int32Type();

    private constructor() {
        super("i32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int32;
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

    compileAdd(context: Context, rightType: IType, module: WasmModule, body: FunctionBody, tryReverse: boolean): IType {
        if(rightType instanceof Int32Type) {
            body.addOpCode(OpCode.I32_ADD);
            return this;
        } else
            return super.compileAdd(context, rightType, module, body, tryReverse);
    }

}
