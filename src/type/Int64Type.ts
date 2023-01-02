import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";

export default class Int64Type extends IntegerType {

    static instance = new Int64Type();

    private constructor() {
        super("i64");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int64;
    }

    sizeof(): number {
        return 8;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7E);
    }

}
