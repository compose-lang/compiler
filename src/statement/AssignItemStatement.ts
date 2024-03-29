import StatementBase from "./StatementBase.ts";
import IType from "../type/IType.ts";
import IExpression from "../expression/IExpression.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import Context from "../context/Context.ts";
import AssignOperator from "./AssignOperator.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import VoidType from "../type/VoidType.ts";
import {assertFalse, assertTrue} from "../../deps.ts";
import ArrayType from "../type/ArrayType.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {TypeBuilder} from "../binaryen/binaryen_wasm.js";

export default class AssignItemStatement extends StatementBase {

    parent: IExpression;
    item: IExpression;
    operator: AssignOperator;
    expression: IExpression;

    constructor(parent: IExpression, item: IExpression, operator: AssignOperator, expression: IExpression) {
        super();
        this.parent = parent;
        this.item = item;
        this.operator = operator;
        this.expression = expression;
    }

    check(context: Context): IType {
        const required = this.checkRequired(context);
        assertTrue(required);
        const actual = this.expression.check(context);
        assertTrue(required.isAssignableFrom(context, actual));
        // TODO check operator
        return VoidType.instance;
    }

    private checkRequired(context: Context): IType {
        const parentType = this.parent.check(context);
        assertTrue(parentType);
        return parentType.checkItem(context, this.item);
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        const parent= this.parent.compile(context,  module, flags, body);
        const item= this.item.compile(context,  module, flags, body);
        const value= this.expression.compile(context, module, flags, body);
        if (parent.type instanceof ArrayType) {
            const wrapperType = parent.type.asType(context);
            const wrapperHeapType = TypeBuilder.heapTypeFromType(wrapperType);
            const arrayType = TypeBuilder.structMemberType(wrapperHeapType, 1);
            const arrayRef = module.structs.getMember(parent.ref, 1, arrayType, false)
            const ref= module.arrays.setItem(arrayRef, item.ref, value.ref);
            return { refs: [ ref ], type: VoidType.instance };
        } else
            assertFalse(true, "Not supported yet!")
    }

}
