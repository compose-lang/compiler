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
        // register declarations first, since this has no side effect
        unit.declarations.forEach(decl => decl.register(this.globals)); // safe
        // TODO register globals to avoid rare edge case of global referring to a declaration referring to a global not yet registered
        // check globals once declarations are registered
        unit.statements.forEach(stmt => stmt.check(this.globals)); // may refer to a declaration
        // check declarations
        unit.declarations.forEach(decl => decl.check(this.globals)); // may refer to a global
        let compilables = unit.declarations.map(decl => decl.getCompilables(this.globals)).reduce((p, v) => p.concat(v), []);
        compilables = compilables.concat(unit.statements);
        compilables.forEach(comp => comp.declare(this.globals, this.module));
        // compile globals in the order of their registration in the globals section
        this.module.globals.forEach(glob => glob.compile(this.globals, this.module));
        // compile functions in the order of their registration in the functions section
        this.module.functions.forEach(decl => decl.compile(this.globals, this.module));
    }

    build(target: IWasmTarget) {
        this.module.writeTo(target);
    }

}
