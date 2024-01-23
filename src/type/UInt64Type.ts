import IntegerType from "./IntegerType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {i64} from "../binaryen/binaryen_wasm.js";
import Context from "../context/Context.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import ReflectionRegistry from "../registry/ReflectionRegistry.ts";

export default class UInt64Type extends IntegerType {

    static instance = new UInt64Type();

    private constructor() {
        super("u64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt64;
    }

    asType(context: Context): Type {
        return i64;
    }

}
