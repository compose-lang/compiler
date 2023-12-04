import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IValueType from "./IValueType";
import BooleanLiteral from "../literal/BooleanLiteral";
import IExpression from "../expression/IExpression";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class BooleanType extends NativeType implements IValueType {

    static instance = new BooleanType()

    private constructor() {
        super("boolean")
    }

    defaultValue(): IExpression {
        return new BooleanLiteral("false");
    }

    asType(): Type {
        return 0x7F; // i32
    }

}
