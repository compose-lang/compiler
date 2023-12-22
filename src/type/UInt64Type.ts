import IntegerType from "./IntegerType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {i64} from "../binaryen/binaryen_wasm.js";

export default class UInt64Type extends IntegerType {

    static instance = new UInt64Type();

    private constructor() {
        super("u64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt64;
    }

    asType(): Type {
        return i64;
    }

}
