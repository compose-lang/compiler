import NativeType from "./NativeType";
import IIntegerType from "./IIntegerType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class UInt32Type extends NativeType implements IIntegerType {

    static instance = new UInt32Type();

    private constructor() {
        super("u32");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

}
