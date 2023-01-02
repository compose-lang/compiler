import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import IValueType from "./IValueType";
import Context from "../context/Context";
import IType from "./IType";

export default class AnyType extends NativeType implements IValueType {

    static instance = new AnyType()

    private constructor() {
        super("any")
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

    byteLength(): number {
        assert.ok(false); // should never get there
    }

    writeTo(target: IWasmTarget) {
        assert.ok(false); // should never get there
    }

    alignof(): number {
        assert.ok(false); // should never get there
    }

    sizeof(): number {
        assert.ok(false); // should never get there
    }
}
