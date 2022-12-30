import DecimalType from "./DecimalType";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import IType from "./IType";
import NumberType from "./NumberType";

export default class Float64Type extends DecimalType {

    static instance = new Float64Type();

    private constructor() {
        super("f64");
    }

    sizeof(): number {
        return 8;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7C);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(rightType instanceof NumberType)
            return this;
        else
            return super.checkAdd(context, rightType, tryReverse);
    }

}
