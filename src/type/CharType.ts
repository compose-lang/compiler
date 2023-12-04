import NativeType from "./NativeType";
import CharLiteral from "../literal/CharLiteral";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class CharType extends NativeType {

    static instance = new CharType()

    private constructor() {
        super("char")
    }

    defaultValue(): IExpression {
        return new CharLiteral("\0");
    }

    asType(): Type {
        assert.ok(false)
    }
}
