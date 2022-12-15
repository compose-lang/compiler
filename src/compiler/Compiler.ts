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
        const compilables = unit.declarations.map(decl => decl.getCompilables(this.globals)).reduce((p, v) => p.concat(v), []);
        compilables.forEach(decl => decl.declare(this.globals, this.module));
        // compile functions in the order of their registration in the functions section
        this.module.functions.forEach(decl => decl.compile(this.globals, this.module));
    }

    build(target: IWasmTarget) {
        this.module.writeTo(target);
    }

}
