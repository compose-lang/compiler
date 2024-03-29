import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import IValueType from "./IValueType.ts";
import Context from "../context/Context.ts";
import IType from "./IType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {auto} from "../binaryen/binaryen_wasm.js";
import {assertTrue} from "../../deps.ts";
import TypeInfo from "../reflection/TypeInfo.ts";

export default class MissingType extends NativeType implements IValueType {

    static instance = new MissingType();

    private constructor() {
        super("missing")
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return true;
    }

    defaultValue(): IExpression {
        assertTrue(false); // should never get there
    }

    asType(context: Context): Type {
        return auto;
    }

    asTypeInfo(context: Context): TypeInfo {
        assertTrue(false); // should never get there
    }

}
