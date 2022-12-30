import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class StringType extends NativeType {

    static instance = new StringType()

    private constructor() {
        super("string")
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
