import FunctionDeclarationBase from "./FunctionDeclarationBase.ts";
import Prototype from "./Prototype.ts";
import Context from "../context/Context.ts";
import Accessibility from "./Accessibility.ts";
import IType from "../type/IType.ts";
import WasmModule from "../module/WasmModule.ts";
import Identifier from "../builder/Identifier.ts";
import Variable from "../context/Variable.ts";
import InstanceModifier from "../statement/InstanceModifier.ts";
import ImportsType from "../type/ImportsType.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import { assertTrue } from "../../deps.ts";

export default class AbstractFunctionDeclaration extends FunctionDeclarationBase {

    constructor(accessibility: Accessibility, proto: Prototype) {
        super(accessibility, proto);
    }

    get isStatic(): boolean {
        return false;
    }

    register(context: Context): void {
        if(this.isModuleImport()) {
            const module = new Identifier(this.getModuleImportName());
            let global = context.getRegisteredGlobal(module);
            if(global == null) {
                global = new Variable(InstanceModifier.CONST, module, new ImportsType(module));
                context.registerGlobal(global);
            }
            const type = global.type as ImportsType;
            assertTrue(!type.has(this.name));
            type.set(this.name, this);
        }
    }

    check(context: Context): IType {
        // TODO
        this.checkRestParameters(context);
        return this.returnType;
    }

    declare(context: Context, module: WasmModule) {
        if(this.isModuleImport())
            module.declareFunction(this);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags): void {
        if(this.isModuleImport())
            module.functions.addImport(this.name, this.getModuleImportName(), this.name, this.functionType(context).asType(context), this.returnType.asType(context));
    }

}
