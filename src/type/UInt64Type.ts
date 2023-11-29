import IntegerType from "./IntegerType";
import NumberPrecedence from "./NumberPrecedence";

export default class UInt64Type extends IntegerType {

    static instance = new UInt64Type();

    private constructor() {
        super("u64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt64;
    }

    asType(): number {
        return 0x7E;
    }

}
