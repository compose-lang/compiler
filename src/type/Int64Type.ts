import IntegerType from "./IntegerType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {i64} from "../binaryen/binaryen_wasm.js";
import Context from "../context/Context.ts";

export default class Int64Type extends IntegerType {

    static instance = new Int64Type();

    private constructor() {
        super("i64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int64;
    }

    asType(context: Context): Type {
        return i64;
    }

}
