import DecimalType from "./DecimalType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class Float32Type extends DecimalType {

    static instance = new Float32Type();

    private constructor() {
        super("f32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float32;
    }

    asType(): Type {
        return binaryen.f32;
    }

}
