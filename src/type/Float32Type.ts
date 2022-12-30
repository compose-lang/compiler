import NativeType from "./NativeType";
import DecimalType from "./DecimalType";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import IType from "./IType";
import IntegerType from "./IntegerType";

export default class Float32Type extends NativeType implements DecimalType {

    static instance = new Float32Type();

    private constructor() {
        super("f32");
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7D);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(rightType == Float32Type.instance || rightType instanceof IntegerType)
            return this;
        else
            return super.checkAdd(context, rightType, tryReverse);
    }



}
