import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class Int64Type extends IntegerType {

    static instance = new Int64Type();

    private constructor() {
        super("i64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int64;
    }

    asType(): Type {
        return 0x7E; // i64
    }

}
