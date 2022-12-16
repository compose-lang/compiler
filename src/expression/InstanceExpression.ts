import ExpressionBase from "./ExpressionBase";
import Identifier from "../builder/Identifier";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import IType from "../type/IType";
import * as assert from "assert";
import FunctionBody from "../module/FunctionBody";
import OpCode from "../compiler/OpCode";

export default class InstanceExpression extends ExpressionBase {

    id: Identifier

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    check(context: Context): IType {
        const local = context.getRegisteredLocal(this.id);
        assert.ok(local !== null);
        return local.type;
    }

    declare(context: Context, module: WasmModule): void {
        // TODO
    }

    compile(context: Context, module: WasmModule, body: FunctionBody) {
        const index = body.getRegisteredLocalIndex(this.id.value);
        body.addOpCode(OpCode.LOCAL_GET, [index]); // TODO encode if index > 0x7F
    }
}
