import DecimalType from "./DecimalType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {f32} from "../binaryen/binaryen_wasm.js";
import Context from "../context/Context.ts";

export default class Float32Type extends DecimalType {

    static instance = new Float32Type();

    private constructor() {
        super("f32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float32;
    }

    asType(context: Context): Type {
        return f32;
    }

}
