import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import IValueType from "./IValueType.ts";
import Context from "../context/Context.ts";
import IType from "./IType.ts";
import {auto, Type} from "../binaryen/binaryen_ts.ts";
import {assert} from "../../deps.ts";

export default class MissingType extends NativeType implements IValueType {

    static instance = new MissingType();

    private constructor() {
        super("missing")
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
        return auto;
    }

}
