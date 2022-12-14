import NativeType from "./NativeType";
import IIntegerType from "./IIntegerType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class UInt64Type extends NativeType implements IIntegerType {

    static instance = new UInt64Type();

    private constructor() {
        super("u64");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7E);
    }

}
