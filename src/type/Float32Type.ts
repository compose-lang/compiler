import NativeType from "./NativeType";
import DecimalType from "./DecimalType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class Float32Type extends NativeType implements DecimalType {

    static instance = new Float32Type();

    private constructor() {
        super("f32");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7D);
    }

}
