import NativeType from "./NativeType.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {none} from "../binaryen/binaryen_wasm.js";
import {assertTrue} from "../../deps.ts";
import Context from "../context/Context.ts";
import TypeInfo from "../reflection/TypeInfo.ts";

export default class NullType extends NativeType {

    static instance = new NullType()

    private constructor() {
        super("null")
    }

    defaultValue(): IExpression {
        assertTrue(false); // should never get there
    }

    asType(context: Context): Type {
        return none;
    }

    asTypeInfo(context: Context): TypeInfo {
        assertTrue(false); // should never get there
    }
}
