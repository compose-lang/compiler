import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class USizeType extends IntegerType {

    static instance = new USizeType();

    private constructor() {
        super("usize");
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F); // i32
    }

}
