import StatementBase from "./StatementBase.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "../expression/IExpression.ts";
import DeclareInstanceStatement from "./DeclareInstanceStatement.ts";
import StatementList from "./StatementList.ts";
import VoidType from "../type/VoidType.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import {assertTrue} from "../../deps.ts";

export default class ForStatement extends StatementBase {

    locals: DeclareInstanceStatement[];
    checkExpressions: IExpression[];
    loopStatements: StatementList;
    statements: StatementList;

    constructor(locals: DeclareInstanceStatement[], checkExpressions: IExpression[], loopStatements: StatementList, statements: StatementList) {
        super();
        this.locals = locals;
        this.checkExpressions = checkExpressions;
        this.loopStatements = loopStatements;
        this.statements = statements;
    }

    check(context: Context): IType {
        context = context.newChildContext();
        this.locals.forEach(local => local.check(context), this);
        this.checkExpressions.forEach(exp => exp.check(context), this);
        this.loopStatements.check(context, null);
        return this.statements.check(context, null);
    }

    declare(context: Context, module: WasmModule): void {
        context = context.newChildContext();
        this.locals.forEach(local => local.declare(context, module), this);
        this.checkExpressions.forEach(exp => exp.declare(context, module), this);
        this.loopStatements.declare(context, module);
        this.statements.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assertTrue(false); // TODO
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        assertTrue(false); // TODO
    }

}
