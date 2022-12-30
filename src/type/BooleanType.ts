import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";

export default class BooleanType extends NativeType {

    static instance = new BooleanType()

    private constructor() {
        super("boolean")
    }

    sizeof(): number {
        return 1;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

}
