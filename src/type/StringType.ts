import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import NullLiteral from "../literal/NullLiteral.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { PackedType } from "../binaryen/binaryen_wasm.js";
import { Type } from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import Context from "../context/Context.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";
import CharType from "./CharType.ts";

export default class StringType extends NativeType {

    static instance = new StringType()

    private constructor() {
        super("string")
    }

    defaultValue(): IExpression {
        return new NullLiteral();
    }

    asType(context: Context): Type {
        const elementType = { type: CharType.instance.asType(context), packedType: PackedType.Int16, mutable: false };
        const classType = HeapTypeRegistry.instance.getArrayGCType(elementType, false);
        const valueType = { type: classType.type, packedType: PackedType.NotPacked, mutable: false };
        const gcType = HeapTypeRegistry.instance.getWrapperGCType(valueType, false);
        return gcType.type;
    }

    asTypeInfo(context: Context): TypeInfo {
        assertTrue(false);
    }
}
