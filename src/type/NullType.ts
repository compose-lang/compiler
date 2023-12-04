import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class NullType extends NativeType {

    static instance = new NullType()

    private constructor() {
        super("null")
    }

    defaultValue(): IExpression {
        assert.ok(false); // should never get there
    }

    count(): number {
        return 0;
    }

    asType(): Type {
        return binaryen.none;
    }
}
