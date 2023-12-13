import NativeType from "./NativeType";
import IExpression from "../expression/IExpression";
import NullLiteral from "../literal/NullLiteral";
import {Type} from "../binaryen/binaryen_ts";
import assert from "assert";

export default class StringType extends NativeType {

    static instance = new StringType()

    private constructor() {
        super("string")
    }

    defaultValue(): IExpression {
        return new NullLiteral();
    }

    asType(): Type {
        assert(false);
    }
}
