import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import Int32Type from "../type/Int32Type.ts";
import Int64Type from "../type/Int64Type.ts";
import ArrayType from "../type/ArrayType.ts";
import {assertFalse} from "../platform/deno/AssertUtils.ts";

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
            // TODO cast item ?
            const elemType = parent.type.elementType;
            const signed = false; // non-packed cannot be signed elemType==Int32Type.instance || elemType==Int64Type.instance;
            const ref = module.arrays.getItem(parent.ref, item.ref, elemType.asType(context), signed);
            return { ref, type: parent.type.elementType };
        } else
            assertFalse(true, "Not supported yet!")
    }

}
