import NativeType from "./NativeType";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import IValueType from "./IValueType";
import Context from "../context/Context";
import IType from "./IType";
import binaryen from "binaryen";
import Type = binaryen.Type;

export default class MissingType extends NativeType implements IValueType {

    static instance = new MissingType();

    private constructor() {
        super("missing")
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return true;
    }

    defaultValue(): IExpression {
        assert.ok(false); // should never get there
    }

    count(): number {
        assert.ok(false); // should never get there
    }

    asType(): Type {
        return binaryen.auto;
    }

}
