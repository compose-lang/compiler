import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IExpression from "../expression/IExpression";
import * as assert from "assert";

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

    asType(): number {
        assert.ok(false); // should never get there
    }
}
