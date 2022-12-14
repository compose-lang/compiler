import NativeType from "./NativeType";
import IDecimalType from "./IDecimalType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class Float64Type extends NativeType implements IDecimalType {

    static instance = new Float64Type();

    private constructor() {
        super("f64");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7C);
    }

}
