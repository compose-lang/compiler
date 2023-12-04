import DecimalType from "./DecimalType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class Float64Type extends DecimalType {

    static instance = new Float64Type();

    private constructor() {
        super("f64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float64;
    }

    asType(): Type {
        return binaryen.f64;
    }

}
