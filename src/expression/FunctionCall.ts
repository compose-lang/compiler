import ExpressionBase from "./ExpressionBase";
import Identifier from "../builder/Identifier";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import IExpression from "./IExpression";
import FunctionBody from "../module/FunctionBody";
import * as assert from "assert";
import FunctionFinder from "../finder/FunctionFinder";
import OpCode from "../compiler/OpCode";

export default class FunctionCall extends ExpressionBase {

    parent: IExpression;
    id: Identifier;
    genericTypes: IType[];
    args: IExpression[];

    constructor(parent: IExpression, id: Identifier, genericTypes: IType[], args: IExpression[]) {
        super();
        this.parent = parent;
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
        this.args.forEach(arg => arg.check(context));
        const decl = FunctionFinder.findFunction(context, this); // will instantiate generic function if required
        assert.ok(decl);
        return decl.returnType;
    }

    declare(context: Context, module: WasmModule): void {
        this.args.forEach(arg => arg.declare(context, module));
        const decl = FunctionFinder.findFunction(context, this);
        assert.ok(decl);
        if(this.isGeneric())
            decl.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.args.forEach(arg => arg.rehearse(context, module, body));
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const decl = FunctionFinder.findFunction(context, this);
        assert.ok(decl);
        this.args.forEach(arg => arg.compile(context, module, body));
        const index = module.getFunctionIndex(decl);
        assert.ok(index >= 0);
        body.addOpCode(OpCode.CALL, [index]); // TODO encode if index > 0x7F
        return decl.type().returnType;
    }

}
