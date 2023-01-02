import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";

export default class ISizeType extends IntegerType {

    static instance = new ISizeType();

    private constructor() {
        super("isize");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int32;
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F); // i32
    }

}
