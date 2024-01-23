import NativeType from "./NativeType.ts";
import CharLiteral from "../literal/CharLiteral.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import Context from "../context/Context.ts";
import TypeInfo from "../reflection/TypeInfo.ts";

export default class CharType extends NativeType {

    static instance = new CharType()

    private constructor() {
        super("char")
    }

    defaultValue(): IExpression {
        return new CharLiteral("\0");
    }

    asType(context: Context): Type {
        assertTrue(false)
    }

    asTypeInfo(context: Context): TypeInfo {
        assertTrue(false); // TODO
    }
}
