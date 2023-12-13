import IntegerType from "./IntegerType";
import NumberPrecedence from "./NumberPrecedence";
import {i64, Type} from "../binaryen/binaryen_ts";

export default class UInt64Type extends IntegerType {

    static instance = new UInt64Type();

    private constructor() {
        super("u64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt64;
    }

    asType(): Type {
        return i64;
    }

}
