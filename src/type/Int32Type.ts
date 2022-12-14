import NativeType from "./NativeType";
import IIntegerType from "./IIntegerType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class Int32Type extends NativeType implements IIntegerType {

    static instance = new Int32Type();

    private constructor() {
        super("i32");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

}
