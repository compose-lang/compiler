import NativeType from "./NativeType";
import IDecimalType from "./IDecimalType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class Float32Type extends NativeType implements IDecimalType {

    static instance = new Float32Type();

    private constructor() {
        super("f32");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7D);
    }

}
