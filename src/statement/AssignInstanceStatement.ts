import StatementBase from "./StatementBase";
import Identifier from "../builder/Identifier";
import IType from "../type/IType";
import IExpression from "../expression/IExpression";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import Context from "../context/Context";
import OpCode from "../compiler/OpCode";
import * as assert from "assert";
import AssignOperator from "./AssignOperator";
import CompilerFlags from "../compiler/CompilerFlags";
import IResults from "./IResults";
import VoidType from "../type/VoidType";

export default class AssignInstanceStatement extends StatementBase {

    parent: IExpression;
    id: Identifier;
    operator: AssignOperator;
    expression: IExpression;

    constructor(parent: IExpression, id: Identifier, operator: AssignOperator, expression: IExpression) {
        super();
        this.parent = parent;
        this.id = id;
        this.operator = operator;
        this.expression = expression;
    }

    get name() {
        return this.id.value;
    }

    check(context: Context): IType {
        const required = this.checkRequired(context);
        assert.ok(required);
        const actual = this.expression.check(context);
        assert.ok(required.isAssignableFrom(context, actual));
        // TODO check operator
        return null;
    }

    private checkRequired(context: Context): IType {
        if (this.parent)
            return this.checkMember(context);
        else
            return this.checkVariable(context);
    }

    private checkMember(context: Context): IType  {
        const parentType = this.parent.check(context);
        assert.ok(parentType);
        return parentType.checkMember(context, this.id);
    }

    private checkVariable(context: Context): IType  {
        let registered = context.getRegisteredLocal(this.id);
        if(!registered)
            registered = context.getRegisteredGlobal(this.id);
        assert.ok(registered, "Unknown variable " + this.id.value + ", at " + this.fragment.toString());
        return registered.type;
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        const value = this.expression.compile(context, module, flags, body);
        const local = body.getRegisteredLocal(this.name);
        if(local) {
            // TODO compile assign operator
            return { refs: [ module.local.set(local.index, value.ref) ], type: VoidType.instance }
        } else {
            const global = module.getRegisteredGlobal(this.name);
            assert.ok(global);
            return { refs: [ module.global.set(this.name, value.ref) ], type: VoidType.instance }
        }
    }

}
