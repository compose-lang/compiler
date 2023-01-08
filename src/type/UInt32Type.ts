import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "./IType";
import BinaryOperator from "../expression/BinaryOperator";
import OpCode from "../compiler/OpCode";

export default class UInt32Type extends IntegerType {

    static instance = new UInt32Type();

    private constructor() {
        super("u32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt32;
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

    compileBitsOperator(context: Context, module: WasmModule, body: FunctionBody, rightType: IType, operator: BinaryOperator): IType {
        if(rightType instanceof UInt32Type) {
            switch(operator) {
                case BinaryOperator.RSHIFT:
                    body.addOpCode(OpCode.I32_SHR_U);
                    return this;
            }
        }
        return super.compileBitsOperator(context, module, body, rightType, operator);
    }

}
