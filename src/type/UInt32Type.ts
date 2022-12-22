import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import IType from "./IType";

export default class UInt32Type extends IntegerType {

    static instance = new UInt32Type();

    private constructor() {
        super("u32");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(rightType == this)
            return this;
        else
            return super.checkAdd(context, rightType, tryReverse);
    }

}
