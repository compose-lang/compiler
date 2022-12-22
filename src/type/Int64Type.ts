import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import IType from "./IType";

export default class Int64Type extends IntegerType {

    static instance = new Int64Type();

    private constructor() {
        super("i64");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7E);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(rightType == this || rightType instanceof IntegerType)
            return this;
        else
            return super.checkAdd(context, rightType, tryReverse);
    }

}
