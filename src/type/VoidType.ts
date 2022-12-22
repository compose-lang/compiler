import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class VoidType extends NativeType {

    static instance = new VoidType()

    private constructor() {
        super("void")
    }

    count(): number {
        return 0;
    }

    byteLength(): number {
        return 0;
    }

    writeTo(target: IWasmTarget) {
        // nothing to do
    }
}
