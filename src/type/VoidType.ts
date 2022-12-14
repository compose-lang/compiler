import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class VoidType extends NativeType {

    static instance = new VoidType()

    private constructor() {
        super("void")
    }

    byteLength(): number {
        return 0;
    }

    writeTo(target: IWasmTarget) {
        // nothing to do
    }
}
