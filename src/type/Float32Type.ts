import DecimalType from "./DecimalType";
import NumberPrecedence from "./NumberPrecedence";
import {f32, Type} from "../binaryen/binaryen_ts";

export default class Float32Type extends DecimalType {

    static instance = new Float32Type();

    private constructor() {
        super("f32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float32;
    }

    asType(): Type {
        return f32;
    }

}
