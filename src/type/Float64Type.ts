import DecimalType from "./DecimalType";
import NumberPrecedence from "./NumberPrecedence";
import {f64, Type} from "../binaryen/binaryen_ts";

export default class Float64Type extends DecimalType {

    static instance = new Float64Type();

    private constructor() {
        super("f64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float64;
    }

    asType(): Type {
        return f64;
    }

}
