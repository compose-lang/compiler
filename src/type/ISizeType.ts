import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class ISizeType extends IntegerType {

    static instance = new ISizeType();

    private constructor() {
        super("isize");
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F); // i32
    }

}
