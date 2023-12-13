import NativeType from "./NativeType";
import IValueType from "./IValueType";
import BooleanLiteral from "../literal/BooleanLiteral";
import IExpression from "../expression/IExpression";
import {Type} from "../binaryen/binaryen_ts";

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
