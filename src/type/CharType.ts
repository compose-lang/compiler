import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class CharType extends NativeType {

    static instance = new CharType()

    private constructor() {
        super("char")
    }

    byteLength(): number {
        return 0; // TODO
    }

    writeTo(target: IWasmTarget) {

    }
}
