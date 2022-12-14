import NativeType from "./NativeType";
import IIntegerType from "./IIntegerType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class Int64Type extends NativeType implements IIntegerType {

    static instance = new Int64Type();

    private constructor() {
        super("i64");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7E);
    }

}
