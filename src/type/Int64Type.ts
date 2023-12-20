import IntegerType from "./IntegerType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import {i64, Type} from "../binaryen/binaryen_ts.ts";

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
