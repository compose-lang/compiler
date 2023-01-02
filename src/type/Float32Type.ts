import DecimalType from "./DecimalType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";

export default class Float32Type extends DecimalType {

    static instance = new Float32Type();

    private constructor() {
        super("f32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Float32;
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7D);
    }

}
