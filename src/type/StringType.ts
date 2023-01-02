import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IExpression from "../expression/IExpression";
import DecimalLiteral from "../literal/DecimalLiteral";
import NullLiteral from "../literal/NullLiteral";

export default class StringType extends NativeType {

    static instance = new StringType()

    private constructor() {
        super("string")
    }

    defaultValue(): IExpression {
        return new NullLiteral();
    }

    sizeof(): number {
        return 0; // TODO
    }

    byteLength(): number {
        return 0; // TODO
    }

    writeTo(target: IWasmTarget) {

    }
}
