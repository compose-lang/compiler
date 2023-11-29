import NativeType from "./NativeType";
import IExpression from "../expression/IExpression";
import * as assert from "assert";

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

    asType(): number {
        assert.ok(false); // should never get there
    }
}
