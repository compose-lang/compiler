import NativeType from "./NativeType";
import IWasmTarget from "../compiler/IWasmTarget";
import IExpression from "../expression/IExpression";
import * as assert from "assert";
import ClassType from "./ClassType";
import Identifier from "../builder/Identifier";
import IType from "./IType";
import Context from "../context/Context";
import {Type} from "../binaryen/binaryen_ts";

export default class ErrorType extends NativeType {

    static instance = new ErrorType()

    private constructor() {
        super("Error")
    }

    defaultValue(): IExpression {
        return null;
    }

    asType(): Type {
        assert.ok(false); // TODO
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        if(type.typeName == this.typeName)
            return true;
        else if(type instanceof ClassType) {
            const klass = type.getClass(context);
            return klass.hasParent(context, new Identifier("Error"));
        } else
            return super.isAssignableFrom(context, type);
    }

}
