import DecimalType from "./DecimalType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";

export default class Float32Type extends DecimalType {

    static instance = new Float32Type();

    private constructor() {
        super("f32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float32;
    }

    asType(): number {
        return 0x7D; // f32
    }

}
