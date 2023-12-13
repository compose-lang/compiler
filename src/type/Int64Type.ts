import IntegerType from "./IntegerType";
import NumberPrecedence from "./NumberPrecedence";
import {i64, Type} from "../binaryen/binaryen_ts";

export default class Int64Type extends IntegerType {

    static instance = new Int64Type();

    private constructor() {
        super("i64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int64;
    }

    asType(): Type {
        return i64;
    }

}
