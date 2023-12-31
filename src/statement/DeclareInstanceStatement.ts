import StatementBase from "./StatementBase.ts";
import Identifier from "../builder/Identifier.ts";
import IType from "../type/IType.ts";
import IExpression from "../expression/IExpression.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import Context from "../context/Context.ts";
import Variable from "../context/Variable.ts";
import InstanceModifier from "./InstanceModifier.ts";
import IGlobalStatement from "./IGlobalStatement.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import VoidType from "../type/VoidType.ts";
import {assertTrue} from "../../deps.ts";

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
        return VoidType.instance;
    }

    private _check(context: Context): IType {
        if(context.isGlobal())
            assertTrue(this.expression.isConst(context));
        let type = this.expression.check(context);
        if(this.type) {
            assertTrue(this.type.isAssignableFrom(context, type));
            this.expression.resolveType(context, this.type);
            type = this.type;
        }
        context.registerLocal(this.asVariable(context, type));
        return type;
    }

    declare(context: Context, module: WasmModule): void {
        if(context.isGlobal()) {
            const variable = context.getRegisteredLocal(this.id);
            assertTrue(variable !== null);
            assertTrue(this.unit);
            module.declareGlobal(this.unit, variable, this.expression, this.modifier == InstanceModifier.LET, this.isModuleExport());
        } else
            this._check(context);
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.expression.rehearse(context, module, body);
        const type = this._check(context);
        const variable = this.asVariable(context, type);
        body.registerLocal(this.name, variable.type);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        const local = body.getRegisteredLocal(this.name);
        assertTrue(local);
        const value = this.expression.compile(context, module, flags, body);
        const result = module.locals.set(local.index, value.ref);
        return { refs: [result], type: VoidType.instance };
    }

    private asVariable(context: Context, type: IType) {
        return new Variable(this.modifier, this.id, type);
    }

}
