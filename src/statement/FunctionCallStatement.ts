import StatementBase from "./StatementBase";
import Module from "../module/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import IType from "../type/IType";
import Context from "../context/Context";
import FunctionCall from "../expression/FunctionCall";
import VoidType from "../type/VoidType";
import OpCode from "../compiler/OpCode";
import CompilerFlags from "../compiler/CompilerFlags";

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

    declare(context: Context, module: Module): void {
        this.call.declare(context, module);
    }

    rehearse(context: Context, module: Module, body: FunctionBody): void {
        this.call.rehearse(context, module, body);
    }

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType {
        const pushed = this.call.compile(context, module, flags, body);
        if(pushed) {
            let count = pushed.count();
            while(count--)
                body.addOpCode(OpCode.DROP);
        }
        return VoidType.instance;
    }

}
