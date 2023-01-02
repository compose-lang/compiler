import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";

export default class UInt64Type extends IntegerType {

    static instance = new UInt64Type();

    private constructor() {
        super("u64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt64;
    }

    sizeof(): number {
        return 8;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7E);
    }

}
