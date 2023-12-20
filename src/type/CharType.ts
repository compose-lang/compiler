import NativeType from "./NativeType.ts";
import CharLiteral from "../literal/CharLiteral.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_ts.ts";
import {assert} from "../../deps.ts";

export default class CharType extends NativeType {

    static instance = new CharType()

    private constructor() {
        super("char")
    }

    defaultValue(): IExpression {
        return new CharLiteral("\0");
    }

    asType(): Type {
        assert(false)
    }
}
