import ExpressionBase from "./ExpressionBase.ts";
import IExpression from "./IExpression.ts";
import Identifier from "../builder/Identifier.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import ClassType from "../type/ClassType.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import args = Deno.args;
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";

export default class ConstructorExpression extends ExpressionBase {

    id: Identifier;
    genericTypes: IType[];
    args: IExpression[];

    constructor(id: Identifier, genericTypes: IType[], args: IExpression[]) {
        super();
        this.id = id;
        this.genericTypes = genericTypes;
        this.args = args;
    }

    get name(): string {
        return this.id.value;
    }

    isGeneric() {
        return this.genericTypes.length > 0;
    }

    check(context: Context): IType {
        const struct = context.getRegisteredStructBase(this.id);
        return struct.getIType(context);
    }

    declare(context: Context, module: WasmModule): void {
        const struct = context.getRegisteredStructBase(this.id);
        struct.declare(context, module);
        this.args.forEach(arg => arg.declare(context, module));
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        // TODO
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const struct = context.getRegisteredStructBase(this.id);
        const type = struct.getIType(context);
        // TODO for now, assume all fields are populated in correct sequence with correct type
        const fieldRefs = this.args.map(args => args.compile(context, module, flags, body)).map(res => res.ref );
        const gcType = HeapTypeRegistry.instance.getStructGCType(context, type, true);
        const ref = module.structs.newFromFields(gcType.heapType, fieldRefs);
        return { ref, type };
    }

}
