import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IExpression from "../expression/IExpression";
import DecimalLiteral from "../literal/DecimalLiteral";
import NullLiteral from "../literal/NullLiteral";
import assert from "assert";
import binaryen from "binaryen";

export default class StringType extends NativeType {

    static instance = new StringType()

    private constructor() {
        super("string")
    }

    defaultValue(): IExpression {
        return new NullLiteral();
    }

    asType(): number {
        return binaryen.stringref;
    }
}
