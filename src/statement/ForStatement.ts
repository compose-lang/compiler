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
import {assertEquals} from "../../deps.ts";
import BooleanType from "../type/BooleanType.ts";
import VoidType from "../type/VoidType.ts";
import {ExpressionRef} from "../binaryen/binaryen_wasm.d.ts";

export default class ForStatement extends StatementBase {

    locals: DeclareInstanceStatement[];
    conditions: IExpression[];
    incrementers: StatementList;
    statements: StatementList;

    constructor(locals: DeclareInstanceStatement[], conditions: IExpression[], incrementers: StatementList, statements: StatementList) {
        super();
        this.locals = locals;
        this.conditions = conditions;
        this.incrementers = incrementers;
        this.statements = statements;
    }

    check(context: Context): IType {
        context = context.newChildContext();
        this.locals.forEach(local => local.check(context), this);
        this.conditions.forEach(exp => assertEquals(exp.check(context), BooleanType.instance), this);
        this.incrementers.check(context, null);
        return this.statements.check(context, null);
    }

    declare(context: Context, module: WasmModule): void {
        context = context.newChildContext();
        this.locals.forEach(local => local.declare(context, module), this);
        this.conditions.forEach(exp => exp.declare(context, module), this);
        this.incrementers.declare(context, module);
        this.statements.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        context = context.newChildContext();
        this.locals.forEach(local => local.rehearse(context, module, body), this);
        this.conditions.forEach(exp => exp.rehearse(context, module, body), this);
        this.incrementers.rehearse(context, module, body);
        this.statements.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        // TODO support labels in the language
        const label = "loop_" + this.fragment.startLocation.tokenIndex;
        context = context.newChildContext();
        // declare statements execute outside the loop
        const locals = this.locals.length ?
            this.locals.map(local => {
                local.declare(context, module);
                return local.compile(context, module, flags, body);
            }, this)
            .reduce((previous, current) => {
                return { refs: previous.refs.concat(current.refs), type: previous.type };
            }) :
            { refs: [], type: VoidType.instance };
        // compile conditions expression
        const conditions = this.conditions.map(condition => condition.compile(context, module, flags, body), this);
        let condition: ExpressionRef = null;
        while(conditions.length > 0) {
            const c = conditions.shift();
            condition = condition ? module.i32.and(condition, c.ref) : c.ref;
        }
        // compile body
        const results = this.statements.compile(context, module, flags, body);
        // compile incrementers
        const incrementers = this.incrementers.map(incrementer => incrementer.compile(context, module, flags, body), this);
        // merge statements
        const refs = results.refs
            .concat(incrementers.map(result => result.refs).flat());
        // compile branch
        refs.push(module.br(label));
        // compile loop body
        const loopBody = module.if(condition, module.block("loop_body_" + this.fragment.startLocation.tokenIndex, refs, results.type.asType(context)));
        const branch = module.loop(label, loopBody);
        // add it to locals and return
        locals.refs.push(branch);
        return { refs: locals.refs, type: results.type };
    }

}
