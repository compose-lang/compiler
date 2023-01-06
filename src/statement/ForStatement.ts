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
        this.loopStatements.forEach(stmt => stmt.check(context), this);
        const returnType = this.statements.check(context, null);
        return returnType == VoidType.instance ? null : returnType;
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        assert.ok(false); // TODO
    }

    declare(context: Context, module: WasmModule): void {
        assert.ok(false); // TODO
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assert.ok(false); // TODO
    }

}
