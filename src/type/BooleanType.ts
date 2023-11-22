import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IValueType from "./IValueType";
import BooleanLiteral from "../literal/BooleanLiteral";
import IExpression from "../expression/IExpression";

export default class BooleanType extends NativeType implements IValueType {

    static instance = new BooleanType()

    private constructor() {
        super("boolean")
    }

    defaultValue(): IExpression {
        return new BooleanLiteral("false");
    }

    sizeof(): number {
        return 1;
    }

    alignof(): number {
        return 1;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F); // i32
    }

}
