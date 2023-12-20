import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import {none, Type} from "../binaryen/binaryen_ts.ts";
import {assert} from "../../deps.ts";

export default class NullType extends NativeType {

    static instance = new NullType()

    private constructor() {
        super("null")
    }

    defaultValue(): IExpression {
        assert(false); // should never get there
    }

    count(): number {
        return 0;
    }

    asType(): Type {
        return none;
    }
}
