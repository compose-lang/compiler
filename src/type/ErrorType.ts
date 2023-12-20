import NativeType from "./NativeType.ts";
import IWasmTarget from "../compiler/IWasmTarget.ts";
import IExpression from "../expression/IExpression.ts";
import ClassType from "./ClassType.ts";
import Identifier from "../builder/Identifier.ts";
import IType from "./IType.ts";
import Context from "../context/Context.ts";
import {Type} from "../binaryen/binaryen_ts.ts";
import {assert} from "../../deps.ts";
import NullLiteral from "../literal/NullLiteral.ts";

export default class ErrorType extends NativeType {

    static instance = new ErrorType()

    private constructor() {
        super("Error")
    }

    defaultValue(): IExpression {
        return new NullLiteral();
    }

    asType(): Type {
        assert(false); // TODO
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
