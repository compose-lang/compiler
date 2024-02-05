import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import Identifier from "../builder/Identifier.ts";
import IExpression from "./IExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import ArrayType from "../type/ArrayType.ts";
import {assertFalse} from "https://deno.land/std@0.209.0/assert/assert_false.ts";
import StructTypeBase from "../type/StructTypeBase.ts";

export default class MemberExpression extends ExpressionBase {

    parent: IExpression;
    id: Identifier;

    constructor(parent: IExpression, id: Identifier) {
        super();
        this.parent = parent;
        this.id = id;
    }

    check(context: Context): IType {
        const parentType = this.parent.check(context);
        return parentType.checkMember(context, this.id);
    }

    declare(context: Context, module: WasmModule): void {
        this.parent.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.parent.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const parent = this.parent.compile(context, module, flags, body);
        if (parent.type instanceof StructTypeBase) {
            // TODO cast item ?
            const type = parent.type.checkMember(context, this.id);
            const index = parent.type.getMemberIndex(context, this.id);
            const signed = false; // non-packed cannot be signed elemType==Int32Type.instance || elemType==Int64Type.instance;
            // increment index for TypeInfo slot
            const ref = module.structs.getMember(parent.ref, index + 1, type.asType(context), signed);
            return { ref, type };
        } else if(parent.type instanceof ArrayType && "length" == this.id.value) {
            return parent.type.compileLength(context, module, flags, body, parent);
        } else
            assertFalse(true, "Not supported yet!")
    }

}
