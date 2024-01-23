import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import ArrayType from "../type/ArrayType.ts";
import {assertFalse} from "../platform/deno/AssertUtils.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {TypeBuilder} from "../binaryen/binaryen_wasm.js";

export default class ItemExpression extends ExpressionBase {

    parent: IExpression;
    item: IExpression;

    constructor(parent: IExpression, item: IExpression) {
        super();
        this.parent = parent;
        this.item = item;
    }

    check(context: Context): IType {
        const parentType = this.parent.check(context);
        return parentType.checkItem(context, this.item);
    }

    declare(context: Context, module: WasmModule): void {
        this.parent.declare(context, module);
        this.item.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.parent.rehearse(context, module, body);
        this.item.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const parent = this.parent.compile(context, module, flags, body);
        const item = this.item.compile(context, module, flags, body);
        if (parent.type instanceof ArrayType) {
            const wrapperType = parent.type.asType(context);
            const wrapperHeapType = TypeBuilder.heapTypeFromType(wrapperType);
            const arrayType = TypeBuilder.structMemberType(wrapperHeapType, 1);
            const arrayHeapType = TypeBuilder.heapTypeFromType(arrayType);
            const arrayRef = module.structs.getMember(parent.ref, 1, arrayType, false)
            const elemType = TypeBuilder.arrayElementType(arrayHeapType);
            const signed = false; // non-packed cannot be signed elemType==Int32Type.instance || elemType==Int64Type.instance;
            const ref = module.arrays.getItem(arrayRef, item.ref, elemType, signed);
            return { ref, type: parent.type.elementType };
        } else
            assertFalse(true, "Not supported yet!")
    }

}
