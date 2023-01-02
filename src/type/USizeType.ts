import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";

export default class USizeType extends IntegerType {

    static instance = new USizeType();

    private constructor() {
        super("usize");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt32;
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F); // i32
    }

}
