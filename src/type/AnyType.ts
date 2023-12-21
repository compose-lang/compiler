import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import IValueType from "./IValueType.ts";
import Context from "../context/Context.ts";
import IType from "./IType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assert} from "../../deps.ts";

export default class AnyType extends NativeType implements IValueType {

    static instance = new AnyType()

    private constructor() {
        super("any")
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return true;
    }

    defaultValue(): IExpression {
        assert(false); // should never get there
    }

    count(): number {
        assert(false); // should never get there
    }

    asType(): Type {
        assert(false); // should never get there
    }

}
