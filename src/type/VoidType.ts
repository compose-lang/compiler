import NativeType from "./NativeType";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class VoidType extends NativeType {

    static instance = new VoidType()

    private constructor() {
        super("void")
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
