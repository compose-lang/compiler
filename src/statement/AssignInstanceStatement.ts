import StatementBase from "./StatementBase.ts";
import Identifier from "../builder/Identifier.ts";
import IType from "../type/IType.ts";
import IExpression from "../expression/IExpression.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import Context from "../context/Context.ts";
import AssignOperator from "./AssignOperator.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import VoidType from "../type/VoidType.ts";
import {assert} from "../../deps.ts";

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
        assert(required);
        const actual = this.expression.check(context);
        assert(required.isAssignableFrom(context, actual));
        // TODO check operator
        return VoidType.instance;
    }

    private checkRequired(context: Context): IType {
        if (this.parent)
            return this.checkMember(context);
        else
            return this.checkVariable(context);
    }

    private checkMember(context: Context): IType  {
        const parentType = this.parent.check(context);
        assert(parentType);
        return parentType.checkMember(context, this.id);
    }

    private checkVariable(context: Context): IType  {
        let registered = context.getRegisteredLocal(this.id);
        if(!registered)
            registered = context.getRegisteredGlobal(this.id);
        assert(registered, "Unknown variable " + this.id.value + ", at " + this.fragment.toString());
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
            return { refs: [ module.locals.set(local.index, value.ref) ], type: VoidType.instance }
        } else {
            const global = module.getRegisteredGlobal(this.name);
            assert(global);
            return { refs: [ module.globals.set(this.name, value.ref) ], type: VoidType.instance }
        }
    }

}
