import StatementBase from "./StatementBase.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "../expression/IExpression.ts";
import DeclareInstanceStatement from "./DeclareInstanceStatement.ts";
import StatementList from "./StatementList.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import {assertEquals, assertTrue} from "../../deps.ts";
import BooleanType from "../type/BooleanType.ts";
import compile = WebAssembly.compile;

export default class WhileStatement extends StatementBase {

    condition: IExpression;
    statements: StatementList;

    constructor(condition: IExpression, statements: StatementList) {
        super();
        this.condition = condition;
        this.statements = statements;
    }

    check(context: Context): IType {
        context = context.newChildContext();
        const type = this.condition.check(context);
        assertEquals(type, BooleanType.instance, "Condition must be a boolean expression!")
        return this.statements.check(context, null);
    }

    declare(context: Context, module: WasmModule): void {
        context = context.newChildContext();
        this.condition.declare(context, module);
        this.statements.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        context = context.newChildContext();
        this.condition.rehearse(context, module, body);
        body.createAndPushLocalsScope(this.fragment.startLocation.tokenIndex);
        this.statements.rehearse(context, module, body);
        body.popLocalsScope(this.fragment.startLocation.tokenIndex);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        // TODO support labels in the language
        const label = "loop_" + this.fragment.startLocation.tokenIndex;
        const condition = this.condition.compile(context, module, flags, body);
        const loopContext = context.newChildContext()
        body.pushLocalsScope(this.fragment.startLocation.tokenIndex);
        const results = this.statements.compile(loopContext, module, flags, body);
        results.refs.push(module.br(label));
        const loopBody = module.if(condition.ref, module.block("loop_body_" + this.fragment.startLocation.tokenIndex, results.refs, results.type.asType(loopContext)));
        const ref = module.loop(label, loopBody);
        body.popLocalsScope(this.fragment.startLocation.tokenIndex);
        return { refs: [ ref ], type: results.type };
    }

}
