import FunctionDeclarationBase from "./FunctionDeclarationBase";
import ICompilable from "../compiler/ICompilable";
import Accessibility from "./Accessibility";
import Prototype from "./Prototype";
import Instruction from "../assembly/Instruction";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import IType from "../type/IType";

export default class NativeFunctionDeclaration extends FunctionDeclarationBase implements ICompilable {

    instructions: Instruction[];

    constructor(accessibility: Accessibility, proto: Prototype, instructions: Instruction[]) {
        super(accessibility, proto);
        this.instructions = instructions;
    }

    get isStatic(): boolean {
        return true;
    }

    check(context: Context): IType {
        this.checkRestParameters(context);
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.register(local));
        this.instructions.forEach(i => i.check(local), this);
        return this.returnType;
    }

    declare(context: Context, module: WasmModule): void {
        module.declareConcreteFunction(this, this.isModuleExport());
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.declare(local, module));
        this.instructions.forEach(i => i.declare(local, module));
    }

    compile(context: Context, module: WasmModule): void {
        const section = module.getCodeSection();
        const body = section.createFunctionCode();
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.rehearse(local, module, body));
        this.instructions.forEach(i => i.rehearse(local, module, body));
        // parameters are compiled by function call
        this.instructions.forEach(i => i.compile(local, module, body), this);
    }

}

