import DecimalType from "./DecimalType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";

export default class Float64Type extends DecimalType {

    static instance = new Float64Type();

    private constructor() {
        super("f64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float64;
    }

    asType(): number {
        return 0x7C; // f64
    }

}
