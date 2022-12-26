import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";

export default class Compiler {

    globals = Context.newGlobalsContext();
    module = new WasmModule();

    buildOne(unit: CompilationUnit, target: IWasmTarget) {
        this.declareAndCheckUnit(unit);
        this.compileUnit(unit);
        this.build(target);
    }

    compileUnits(...units: CompilationUnit[]) {
        units.forEach(unit => this.declareAndCheckUnit(unit));
        units.forEach(unit => this.compileUnit(unit));
    }

    private declareAndCheckUnit(unit: CompilationUnit) {
        // register declarations first, since this has no side effect
        unit.declarations.forEach(decl => decl.register(this.globals)); // safe
        // TODO register globals to avoid rare edge case of global referring to a declaration referring to a global not yet registered
        // check globals once declarations are registered
        unit.statements.forEach(stmt => stmt.check(this.globals)); // may refer to a declaration
        // check declarations
        unit.declarations.forEach(decl => decl.check(this.globals)); // may refer to a global
        unit.declarations.forEach(decl => decl.declare(this.globals, this.module), this);
        unit.statements.forEach(stmt => stmt.declare(this.globals, this.module));
    }

    private compileUnit(unit: CompilationUnit) {
        // compile globals in the order of their registration in the globals section
        this.module.globals.forEach(glob => glob.compile(this.globals, this.module));
        // compile functions in the order of their registration in the functions section
        this.module.functions.forEach(decl => decl.compile(this.globals, this.module));
    }

    addMemory(minPages: number, maxPages?: number) {
        this.module.getMemorySection().addMemory(minPages, maxPages);
    }

    build(target: IWasmTarget) {
        this.module.writeTo(target);
    }

}
