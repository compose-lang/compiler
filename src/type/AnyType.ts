import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import IValueType from "./IValueType.ts";
import Context from "../context/Context.ts";
import IType from "./IType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import TypeInfo from "../reflection/TypeInfo.ts";

export default class AnyType extends NativeType implements IValueType {

    static instance = new AnyType()

    private constructor() {
        super("any")
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return true;
    }

    defaultValue(): IExpression {
        assertTrue(false); // should never get there
    }

    asType(context: Context): Type {
        assertTrue(false); // should never get there
    }

    asTypeInfo(context: Context): TypeInfo {
        assertTrue(false); // should never get there
    }

    convertTypedExpression(_type: IType, expression: IExpression): IExpression {
        return expression;
    }

}
