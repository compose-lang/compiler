import StatementBase from "./StatementBase";
import Identifier from "../builder/Identifier";
import IType from "../type/IType";
import IExpression from "../expression/IExpression";
import Module from "../module/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import Context from "../context/Context";
import OpCode from "../compiler/OpCode";
import Variable from "../context/Variable";
import InstanceModifier from "./InstanceModifier";
import * as assert from "assert";
import VoidType from "../type/VoidType";
import IGlobalStatement from "./IGlobalStatement";
import CompilerFlags from "../compiler/CompilerFlags";

export default class DeclareInstanceStatement extends StatementBase implements IGlobalStatement {

    modifier: InstanceModifier;
    id: Identifier;
    type: IType;
    expression: IExpression;

    constructor(modifier: InstanceModifier, id: Identifier, type: IType, expression: IExpression) {
        super();
        this.modifier = modifier;
        this.id = id;
        this.type = type;
        if(!expression)
            expression = type.defaultValue();
        this.expression = expression;
    }

    get name() {
        return this.id.value;
    }

    register(context: Context) {
        context.registerGlobalValue(this.id, this.expression);
    }

    check(context: Context): IType {
        this._check(context);
        return null;
    }

    private _check(context: Context): IType {
        if(context.isGlobal())
            assert.ok(this.expression.isConst(context));
        let type = this.expression.check(context);
        if(this.type) {
            assert.ok(this.type.isAssignableFrom(context, type));
            type = this.type;
        }
        context.registerLocal(this.asVariable(context, type));
        return type;
    }

    declare(context: Context, module: Module): void {
        if(context.isGlobal()) {
            const variable = context.getRegisteredLocal(this.id);
            assert.ok(variable !== null);
            module.declareGlobal(this.unit, variable, this.expression, this.isModuleExport());
        } else
            this._check(context);
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: Module, body: FunctionBody): void {
        this.expression.rehearse(context, module, body);
        const type = this._check(context);
        const variable = this.asVariable(context, type);
        body.registerLocal(this.name, variable.type);
    }

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType {
        this.expression.compile(context, module, flags, body);
        const index = body.getRegisteredLocalIndex(this.name);
        body.addOpCode(OpCode.LOCAL_SET, [index]); // TODO encode if index > 0x7F
        return null;
    }

    private asVariable(context: Context, type: IType) {
        return new Variable(this.modifier, this.id, type);
    }

}
