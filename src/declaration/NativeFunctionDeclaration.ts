import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Accessibility from "./Accessibility";
import Prototype from "./Prototype";
import Instruction from "../assembly/Instruction";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import IType from "../type/IType";
import CompilerFlags from "../compiler/CompilerFlags";
import FunctionBody from "../module/FunctionBody";
import binaryen from "binaryen";
import OpCode from "../compiler/OpCode";

export default class NativeFunctionDeclaration extends FunctionDeclarationBase {

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
        module.declareFunction(this);
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.declare(local, module));
        this.instructions.forEach(i => i.declare(local, module));
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags): void {
        if(this.isModuleExport())
            module.addFunctionExport(this.name, this.name); // TODO mangle name
        const local = context.newLocalContext();
        const body = new FunctionBody();
        this.parameters.forEach(param => param.rehearse(local, module, body));
        this.instructions.forEach(i => i.rehearse(local, module, body));
        // parameters are compiled by function call
        const refs = this.instructions.filter(i => i.opcode != OpCode.END).map(i => i.compile(local, module, flags, body), this);
        // TODO types
        const block = module.block(null, refs, binaryen.i32);
        module.addFunction(this.name, 0, binaryen.i32, [], block);
    }

}

