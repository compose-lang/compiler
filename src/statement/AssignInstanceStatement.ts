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

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        this.expression.compile(context, module, body);
        let index = body.getRegisteredLocalIndex(this.name);
        if(index) {
            // TODO compile operator
            body.addOpCode(OpCode.LOCAL_SET, [index]); // TODO encode if index > 0x7F
        } else {
            index  = module.getGlobalsSection().getGlobalIndex(this.name);
            assert.ok(index);
            body.addOpCode(OpCode.GLOBAL_SET, [index]); // TODO encode if index > 0x7F
        }
        return null;
    }

}
