import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class BooleanType extends NativeType {

    static instance = new BooleanType()

    private constructor() {
        super("boolean")
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

}
