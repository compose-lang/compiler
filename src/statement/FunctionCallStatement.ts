import StatementBase from "./StatementBase";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Context from "../context/Context";
import FunctionCall from "../expression/FunctionCall";
import VoidType from "../type/VoidType";
import OpCode from "../compiler/OpCode";

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

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const pushed = this.call.compile(context, module, body);
        if(pushed) {
            let count = pushed.count();
            while(count--)
                body.addOpCode(OpCode.DROP);
        }
        return VoidType.instance;
    }

}
