import NativeType from "./NativeType";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import {none, Type} from "../binaryen/binaryen_ts";

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
        return none;
    }
}
