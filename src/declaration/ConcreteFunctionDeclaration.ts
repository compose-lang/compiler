import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import IStatement from "../statement/IStatement";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import ICompilable from "../compiler/ICompilable";
import OpCode from "../compiler/OpCode";
import IDeclarable from "../compiler/IDeclarable";

export default class ConcreteFunctionDeclaration extends FunctionDeclarationBase implements ICompilable {

    statements: IStatement[];

    constructor(proto: Prototype, statements: IStatement[]) {
        super(proto);
        this.statements = statements;
    }


    register(context: Context): void {
        context.registerFunction(this);
    }

    check(context: Context): void {
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.register(local));
        this.statements.forEach(stmt => stmt.check(local));
    }

    getDeclarables(context: Context): IDeclarable[] {
        return [this];
    }

    declare(context: Context, module: WasmModule): void {
        module.declareFunction(this, this.isExported());
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.declare(local, module));
        this.statements.forEach(stmt => stmt.declare(local, module));
    }

    compile(context: Context, module: WasmModule): void {
        const section = module.getCodeSection();
        const body = section.createFunctionCode();
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.rehearse(local, module, body));
        this.statements.forEach(stmt => stmt.rehearse(local, module, body));
        // parameters are compiled by function call
        this.statements.forEach(stmt => stmt.compile(local, module, body), this);
        body.addOpCode(OpCode.END);
    }

}
