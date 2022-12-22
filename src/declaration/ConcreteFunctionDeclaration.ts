import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import IStatement from "../statement/IStatement";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import ICompilable from "../compiler/ICompilable";
import OpCode from "../compiler/OpCode";
import IDeclarable from "../compiler/IDeclarable";
import VoidType from "../type/VoidType";
import IType from "../type/IType";

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
        // TODO
    }

    getDeclarables(context: Context): IDeclarable[] {
        return [this];
    }

    declare(context: Context, module: WasmModule): void {
        module.declareFunction(this, this.isExported());
        const local = context.newLocalContext();
        // TODO register parameters
        this.statements.forEach(stmt => stmt.declare(local, module));
    }

    compile(context: Context, module: WasmModule): void {
        const section = module.getCodeSection();
        const body = section.createFunctionCode();
        let local = context.newLocalContext();
        // TODO register parameters
        this.statements.forEach(stmt => stmt.rehearse(local, module, body));
        local = context.newLocalContext();
        // TODO register parameters
        this.statements.forEach(stmt => stmt.compile(local, module, body), this);
        body.addOpCode(OpCode.END);
    }

}
