import StatementBase from "./StatementBase";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Context from "../context/Context";
import FunctionCall from "../expression/FunctionCall";
import CompilerFlags from "../compiler/CompilerFlags";
import IResults from "./IResults";
import VoidType from "../type/VoidType";

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
        return null;
    }

    declare(context: Context, module: WasmModule): void {
        this.call.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.call.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        const result = this.call.compile(context, module, flags, body);
        const ref = module.drop(result.ref);
        return { refs: [ref], type: VoidType.instance};
    }

}
