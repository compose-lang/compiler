import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IDataType from "./IDataType";

export default class BooleanType extends NativeType implements IDataType {

    static instance = new BooleanType()

    private constructor() {
        super("boolean")
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
