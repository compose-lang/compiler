import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";

export default class Compiler {

    globals = Context.newGlobalsContext();
    module = new WasmModule();

    buildOne(unit: CompilationUnit, target: IWasmTarget) {
        this.compileUnit(unit);
        this.build(target);
    }

    compileUnits(...units: CompilationUnit[]) {
        units.forEach(unit => this.compileUnit(unit));
    }

    compileUnit(unit: CompilationUnit) {
        unit.declarations.forEach(decl => decl.register(this.globals));
        unit.declarations.forEach(decl => decl.check(this.globals));
        unit.declarations.forEach(decl => decl.declare(this.globals, this.module));
        unit.declarations.forEach(decl => decl.compile(this.globals, this.module));
    }

    build(target: IWasmTarget) {
        this.module.writeTo(target);
    }

}
