import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import CharLiteral from "../literal/CharLiteral";
import IExpression from "../expression/IExpression";

export default class CharType extends NativeType {

    static instance = new CharType()

    private constructor() {
        super("char")
    }

    defaultValue(): IExpression {
        return new CharLiteral("\0");
    }

    byteLength(): number {
        return 0; // TODO
    }

    writeTo(target: IWasmTarget) {

    }
}
