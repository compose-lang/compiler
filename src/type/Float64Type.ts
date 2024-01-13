import DecimalType from "./DecimalType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {f64} from "../binaryen/binaryen_wasm.js";
import Context from "../context/Context.ts";

export default class Float64Type extends DecimalType {

    static instance = new Float64Type();

    private constructor() {
        super("f64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float64;
    }

    asType(context: Context): Type {
        return f64;
    }

}
