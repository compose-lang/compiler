import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import IStatement from "../statement/IStatement";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import ICompilable from "../compiler/ICompilable";
import OpCode from "../compiler/OpCode";

export default class ConcreteFunctionDeclaration extends FunctionDeclarationBase implements ICompilable {

    statements: IStatement[];

    constructor(proto: Prototype, statements: IStatement[]) {
        super(proto);
        this.statements = statements;
    }


    register(context: Context): void {
        context.registerMethod(this);
    }

    check(context: Context): void {
        // TODO
    }

    getCompilables(context: Context): ICompilable[] {
        return [this];
    }


    declare(context: Context, module: WasmModule): void {
        module.declareFunction(this, true);
        this.statements.forEach(stmt => stmt.declare(context, module));
    }

    compile(context: Context, module: WasmModule): void {
        const section = module.getCodeSection();
        const body = section.createFunctionCode();
        context = context.newLocalContext();
        // TODO register parameters
        this.statements.forEach(stmt => stmt.rehearse(context.newChildContext(), module, body));
        this.statements.forEach(stmt => stmt.compile(context.newChildContext(), module, body));
        body.addOpCode(OpCode.END);
    }

}
