import StatementBase from "./StatementBase.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import FunctionCall from "../expression/FunctionCall.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import VoidType from "../type/VoidType.ts";

export default class FunctionCallStatement extends StatementBase {

    call: FunctionCall;

    constructor(call: FunctionCall) {
        super();
        this.call = call;
    }

    get name(): string {
        return this.call.name;
    }

    check(context: Context): IType {
        this.call.check(context);
        return VoidType.instance;
    }

    declare(context: Context, module: WasmModule): void {
        this.call.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.call.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        const result = this.call.compile(context, module, flags, body);
        const ref = result.type == VoidType.instance ? result.ref : module.drop(result.ref);
        return { refs: [ref], type: VoidType.instance};
    }

}
