import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import IStatement from "../statement/IStatement";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default class ConcreteFunctionDeclaration extends FunctionDeclarationBase {

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

    declare(context: Context, module: WasmModule): void {
        module.exportMethod(this.prototype());
        // this.statements.forEach(stmt => stmt.declare(context, module));
    }

    compile(context: Context, module: WasmModule): void {
        // TODO
    }

}
