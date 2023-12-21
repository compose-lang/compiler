import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {none} from "../binaryen/binaryen_wasm.js";
import {assert} from "../../deps.ts";

export default class VoidType extends NativeType {

    static instance = new VoidType()

    private constructor() {
        super("void")
    }

    defaultValue(): IExpression {
        assert(false); // should never get there
    }

    count(): number {
        return 0;
    }

    asType(): Type {
        return none;
    }
}
