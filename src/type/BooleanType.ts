import NativeType from "./NativeType.ts";
import IValueType from "./IValueType.ts";
import BooleanLiteral from "../literal/BooleanLiteral.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";

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
