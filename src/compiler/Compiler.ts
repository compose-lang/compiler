import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import * as assert from "assert";
import ComposeBuilder from "../builder/ComposeBuilder";
import {fileURLToPath} from "url";
import {dirname} from "path";
import CompilerOptions from "./CompilerOptions";
import IDwarfTarget from "../debug/IDwarfTarget";
import ExternalDebugSection from "../debug/ExternalDebugSection";
import CompilerFlags from "./CompilerFlags";

export default class Compiler {

    module = new WasmModule();
    units: CompilationUnit[] = [];

    addMemory(minPages: number, maxPages?: number) {
        this.module.getMemorySection().addMemory(minPages, maxPages);
    }

    buildOne(unit: CompilationUnit, wasmTarget: IWasmTarget, dwarfTarget: IDwarfTarget = null, options = CompilerOptions.DEFAULTS) {
        assert.ok(this.units.length == 0);
        if(options.parseAndCheck) {
            this.addUnit(unit);
            if (options.declare) {
                this.declareUnits();
                if (options.compile) {
                    const flags = dwarfTarget != null ? CompilerFlags.DEBUG : CompilerFlags.DEFAULTS;
                    this.compileAtoms(flags);
                    if (options.assemble) {
                         this.assembleModule(wasmTarget, dwarfTarget);
                    }
                }
            }
        }
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
        // parse and register cots builtins
        Compiler.parseAndRegisterBuiltins(unit.context);
        // register special builtins
        unit.context.registerBuiltins();
        // register declarations
        unit.declarations.forEach(decl => decl.register(unit.context));
        // register then check globals (once declarations are registered)
        unit.statements.forEach(stmt => stmt.register(unit.context));
        unit.statements.forEach(stmt => stmt.check(unit.context));
        // check declarations
        unit.declarations.forEach(decl => decl.check(unit.context));
    }

    private declareUnits() {
        this.units.forEach(unit => unit.declarations.filter(decl => decl.isModuleImport()).forEach(decl => decl.declare(unit.context, this.module), this), this);
        this.units.forEach(unit => unit.declarations.filter(decl => !decl.isModuleImport()).forEach(decl => decl.declare(unit.context, this.module), this), this);
        this.units.forEach(unit => unit.statements.forEach(stmt => stmt.declare(unit.context, this.module), this), this);
    }

    private compileAtoms(flags: CompilerFlags) {
        // compile globals in the order of their registration in the globals section
        this.module.globals.forEach(glob => glob.compile(glob.unit.context, this.module, flags));
        // compile functions in the order of their registration in the functions section
        this.module.functions.forEach(decl => decl.compile(decl.unit.context, this.module, flags));
    }

    assembleModule(wasmTarget: IWasmTarget, dwarfTarget: IDwarfTarget | null) {
        if (dwarfTarget != null)
            this.module.debugInfo.writeTo(dwarfTarget, this.module);
        this.module.writeTo(wasmTarget);
    }

    private static parseAndRegisterBuiltins(context: Context) {
        // parse and register cots builtins
        ["/runtime/util/error.cots"].forEach(name => Compiler.parseAndRegisterBuiltin(name, context));
    }

    private static parseAndRegisterBuiltin(name: string, context: Context) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(dirname(dirname(__filename)));
        const path = __dirname + name;
        const unit = ComposeBuilder.parse_unit(path);
        unit.declarations.forEach(decl => decl.register(context));
    }

}
