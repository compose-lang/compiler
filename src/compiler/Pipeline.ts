import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import Context from "../context/Context";
import * as assert from "assert";
import ComposeBuilder from "../builder/ComposeBuilder";
import {fileURLToPath} from "url";
import {dirname} from "path";
import PipelineOptions from "./PipelineOptions";
import CompilerFlags from "./CompilerFlags";

export default class Pipeline {

    units: CompilationUnit[] = [];

    buildOne(unit: CompilationUnit, wasmTarget: IWasmTarget, flags = CompilerFlags.DEFAULTS, options = PipelineOptions.DEFAULTS) {
        assert.ok(this.units.length == 0);
        if(options.parseAndCheck) {
            this.addUnit(unit);
            if (options.declare) {
                this.declareUnits();
                if (options.compile) {
                    this.compileUnits(flags);
                    if (options.assemble) {
                         this.assembleModules(wasmTarget, flags);
                    }
                }
            }
        }
    }

    addUnit(unit: CompilationUnit) {
        this.units.push(unit);
        unit.context = Context.newGlobalsContext();
        unit.processImports(this.addUnit);
        unit.populateContextAndCheck(Pipeline.parseAndRegisterBuiltins);
    }

    declareUnits() {
        this.units.forEach(unit => unit.declare());
    }

    private compileUnits(flags: CompilerFlags) {
        this.units.forEach(unit => unit.compileAtoms(flags));
    }

    assembleModules(wasmTarget: IWasmTarget, flags: CompilerFlags) {
        // multi-unit not supported yet
        assert.equal(1, this.units.length)
        this.units[0].assembleModule(wasmTarget, flags);
    }

    private static parseAndRegisterBuiltins(context: Context) {
        // parse and register cots builtins
        ["/runtime/util/error.cots"].forEach(name => Pipeline.parseAndRegisterBuiltin(name, context));
    }

    private static parseAndRegisterBuiltin(name: string, context: Context) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(dirname(dirname(__filename)));
        const path = __dirname + name;
        const unit = ComposeBuilder.parse_unit(path);
        unit.declarations.forEach(decl => decl.register(context));
    }

}
