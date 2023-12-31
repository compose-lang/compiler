import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {none} from "../binaryen/binaryen_wasm.js";
import {assertTrue} from "../../deps.ts";

export default class NullType extends NativeType {

    static instance = new NullType()

    private constructor() {
        super("null")
    }

    defaultValue(): IExpression {
        assertTrue(false); // should never get there
    }

    count(): number {
        return 0;
    }

    asType(): Type {
        return none;
    }
}
