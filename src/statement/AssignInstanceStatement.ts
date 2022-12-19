import StatementBase from "./StatementBase";
import Identifier from "../builder/Identifier";
import IType from "../type/IType";
import IExpression from "../expression/IExpression";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import Context from "../context/Context";
import OpCode from "../compiler/OpCode";
import Variable from "../context/Variable";
import InstanceModifier from "../context/InstanceModifier";
import * as assert from "assert";

export default class AssignInstanceStatement extends StatementBase {

    modifier: InstanceModifier;
    id: Identifier;
    type: IType;
    expression: IExpression;

    constructor(modifier: InstanceModifier, id: Identifier, type: IType, expression: IExpression) {
        super();
        this.modifier = modifier;
        this.id = id;
        this.type = type;
        this.expression = expression;
    }

    get name() {
        return this.id.value;
    }

    check(context: Context): IType {
        let type = this.expression.check(context);
        if(this.type) {
            assert.ok(this.type.isAssignableFrom(type));
            type = this.type;
        }
        if(this.modifier !== null)
            context.registerLocal(this.asVariable(context, type));
        return type;
    }

    declare(context: Context, module: WasmModule): void {
        if(this.modifier !== null && context.isGlobal()) {
            const variable = context.getRegisteredLocal(this.id);
            assert.ok(variable !== null);
            module.declareGlobal(variable, this.expression, this.isExported());
        }
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.expression.rehearse(context, module, body);
        if(this.modifier !== null) {
            const type = this.check(context);
            const variable = this.asVariable(context, type);
            body.registerLocal(this.name, variable.type);
        }
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): void {
        this.expression.compile(context, module, body);
        if(this.modifier !== null)
            this.check(context); // registers the local variable
        const index = body.getRegisteredLocalIndex(this.name);
        body.addOpCode(OpCode.LOCAL_SET, [index]); // TODO encode if index > 0x7F
    }

    private asVariable(context: Context, type: IType) {
        return new Variable(this.modifier, this.id, type);
    }
}
