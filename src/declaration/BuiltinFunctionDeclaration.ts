import FunctionDeclarationBase from "./FunctionDeclarationBase.ts";
import WasmModule from "../module/WasmModule.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";

export default abstract class BuiltinFunctionDeclaration extends FunctionDeclarationBase {

    get isStatic(): boolean {
        return false;
    }

    check(context: Context): IType {
        this.checkRestParameters(context);
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.register(local));
        return this.returnType;
    }

    declare(context: Context, module: WasmModule): void {
        module.declareFunction(this);
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.declare(local, module));
    }

    abstract compile(context: Context, module: WasmModule, flags: CompilerFlags): void;

}

