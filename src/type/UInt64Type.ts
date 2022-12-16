import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class UInt64Type extends IntegerType {

    static instance = new UInt64Type();

    private constructor() {
        super("u64");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7E);
    }

}
