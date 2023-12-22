import FunctionDeclarationBase from "./FunctionDeclarationBase.ts";
import Accessibility from "./Accessibility.ts";
import Prototype from "./Prototype.ts";
import Instruction from "../assembly/Instruction.ts";
import WasmModule from "../module/WasmModule.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import FunctionBody from "../module/FunctionBody.ts";
import OpCode from "../compiler/OpCode.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { i32 } from "../binaryen/binaryen_wasm.js";

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
            module.functions.addExport(this.name, this.name); // TODO mangle name
        const local = context.newLocalContext();
        const body = new FunctionBody();
        this.parameters.forEach(param => param.rehearse(local, module, body));
        this.instructions.forEach(i => i.rehearse(local, module, body));
        // parameters are compiled by function call
        const refs = this.instructions.filter(i => i.opcode != OpCode.END).map(i => i.compile(local, module, flags, body), this);
        // TODO types
        const block = module.block(null, refs, i32); // TODO block type
        module.functions.add(this.name, 0, i32, [], block);
    }

}

