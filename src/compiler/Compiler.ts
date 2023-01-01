import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import * as assert from "assert";

export default class Compiler {

    module = new WasmModule();
    units: CompilationUnit[] = [];

    addMemory(minPages: number, maxPages?: number) {
        this.module.getMemorySection().addMemory(minPages, maxPages);
    }

    buildOne(unit: CompilationUnit, target: IWasmTarget) {
        assert.ok(this.units.length == 0);
        this.addUnit(unit);
        this.declareUnits();
        this.compileAtoms();
        this.buildModule(target);
    }

    addUnit(unit: CompilationUnit) {
        this.units.push(unit);
        unit.context = Context.newGlobalsContext();
        this.processUnitImports(unit);
        this.populateContextAndCheck(unit);
    }

    private processUnitImports(unit: CompilationUnit) {
        unit.imports.forEach(imp => imp.process(unit, this));
    }

    private populateContextAndCheck(unit: CompilationUnit) {
        // register declarations first, since this has no side effect
        unit.declarations.forEach(decl => decl.register(unit.context));
        // register then check globals once declarations are registered
        unit.statements.forEach(stmt => stmt.register(unit.context)); // may refer to a declaration
        unit.statements.forEach(stmt => stmt.check(unit.context)); // may refer to a declaration
        // check declarations
        unit.declarations.forEach(decl => decl.check(unit.context)); // may refer to a global
    }

    private declareUnits() {
        this.units.forEach(unit => unit.declarations.filter(decl => decl.isModuleImport()).forEach(decl => decl.declare(unit.context, this.module), this), this);
        this.units.forEach(unit => unit.declarations.filter(decl => !decl.isModuleImport()).forEach(decl => decl.declare(unit.context, this.module), this), this);
        this.units.forEach(unit => unit.statements.forEach(stmt => stmt.declare(unit.context, this.module), this), this);
        this.units.forEach(unit => unit.statements.forEach(stmt => stmt.constify(unit.context, this.module), this), this);
    }

    private compileAtoms() {
        // compile globals in the order of their registration in the globals section
        this.module.globals.forEach(glob => glob.compile(glob.unit.context, this.module));
        // compile functions in the order of their registration in the functions section
        this.module.functions.forEach(decl => decl.compile(decl.unit.context, this.module));
    }

    buildModule(target: IWasmTarget) {
        this.module.writeTo(target);
    }

}
