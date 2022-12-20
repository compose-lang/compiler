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
        const registered = context.getRegisteredLocal(this.id);
        assert.ok(registered);
        const actual = this.expression.check(context);
        assert.ok(registered.type.isAssignableFrom(actual));
        // TODO check operator
        return VoidType.instance;
    }

    declare(context: Context, module: WasmModule): void {
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.expression.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): void {
        this.expression.compile(context, module, body);
        const index = body.getRegisteredLocalIndex(this.name);
        // TODO compile operator
        body.addOpCode(OpCode.LOCAL_SET, [index]); // TODO encode if index > 0x7F
    }

}
