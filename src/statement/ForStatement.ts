import StatementBase from "./StatementBase";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import Context from "../context/Context";
import * as assert from "assert";
import IExpression from "../expression/IExpression";
import DeclareInstanceStatement from "./DeclareInstanceStatement";
import StatementList from "./StatementList";
import VoidType from "../type/VoidType";
import CompilerFlags from "../compiler/CompilerFlags";
import IResults from "./IResults";

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
        const returnType = this.statements.check(context, null);
        return returnType == VoidType.instance ? null : returnType;
    }

    declare(context: Context, module: WasmModule): void {
        context = context.newChildContext();
        this.locals.forEach(local => local.declare(context, module), this);
        this.checkExpressions.forEach(exp => exp.declare(context, module), this);
        this.loopStatements.declare(context, module);
        this.statements.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assert.ok(false); // TODO
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        assert.ok(false); // TODO
    }

}
