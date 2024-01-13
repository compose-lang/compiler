import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import NullLiteral from "../literal/NullLiteral.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import Context from "../context/Context.ts";

export default class StringType extends NativeType {

    static instance = new StringType()

    private constructor() {
        super("string")
    }

    defaultValue(): IExpression {
        return new NullLiteral();
    }

    asType(context: Context): Type {
        assertTrue(false);
    }
}
