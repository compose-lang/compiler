import NativeType from "./NativeType";
import IExpression from "../expression/IExpression";
import NullLiteral from "../literal/NullLiteral";
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
