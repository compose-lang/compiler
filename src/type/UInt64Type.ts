import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import IType from "./IType";
import UInt32Type from "./UInt32Type";

export default class UInt64Type extends IntegerType {

    static instance = new UInt64Type();

    private constructor() {
        super("u64");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7E);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(rightType == this || rightType == UInt32Type.instance)
            return this;
        else
            return super.checkAdd(context, rightType, tryReverse);
    }


}
