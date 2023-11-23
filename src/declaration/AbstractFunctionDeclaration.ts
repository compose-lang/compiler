import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import Context from "../context/Context";
import Accessibility from "./Accessibility";
import IType from "../type/IType";
import WasmModule from "../module/WasmModule";
import Identifier from "../builder/Identifier";
import Variable from "../context/Variable";
import InstanceModifier from "../statement/InstanceModifier";
import ImportsType from "../type/ImportsType";
import * as assert from "assert";
import ICompilable from "../compiler/ICompilable";
import CompilerFlags from "../compiler/CompilerFlags";

export default class AbstractFunctionDeclaration extends FunctionDeclarationBase implements ICompilable {

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
            assert.ok(!type.has(this.name));
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
            module.declareImportedFunction(this);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags): void {
        // nothing to do
    }

}
