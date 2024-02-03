import NativeType from "./NativeType.ts";
import CharLiteral from "../literal/CharLiteral.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {i32, PackedType} from "../binaryen/binaryen_wasm.js";
import ReflectionRegistry from "../registry/ReflectionRegistry.ts";
import IType from "./IType.ts";
import { Int8Type, UInt8Type, Int16Type, UInt16Type } from "./index.ts";

export default class CharType extends NativeType {

    static instance = new CharType()

    private constructor() {
        super("char")
    }

    defaultValue(): IExpression {
        return new CharLiteral("\0");
    }

    asType(_context: Context): Type {
        return i32;
    }

    asTypeInfo(_context: Context): TypeInfo {
        return ReflectionRegistry.instance.getNativeTypeInfo(this);
    }

    packedType(): typeof PackedType {
        return PackedType.Int16;
    }


    isAssignableFrom(_context: Context, type: IType): boolean {
        return this.isAssignableType(type) || super.isAssignableFrom(_context, type);
    }
    private isAssignableType(type: IType): boolean {
        return type==this || type==Int8Type.instance || type==UInt8Type.instance
        || type==Int16Type.instance || type==UInt16Type.instance;
    }

    convertTypedExpression(type: IType, expression: IExpression): IExpression {
        if(this.isAssignableType(type))
            return expression;
        else
            return super.convertTypedExpression(type, expression);
    }
}
