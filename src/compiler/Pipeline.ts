import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import Context from "../context/Context";
import * as assert from "assert";
import ComposeBuilder from "../builder/ComposeBuilder";
import {fileURLToPath} from "url";
import {dirname} from "path";
import PipelineOptions from "./PipelineOptions";

export default class Pipeline {

    readonly units: CompilationUnit[] = [];
    readonly options = PipelineOptions.DEFAULTS;

    constructor(options = PipelineOptions.DEFAULTS) {
        if(!options.sourceAdded)
            options.sourceAdded = path => this.addSource(path);
        this.options = options;
    }

    build(units: CompilationUnit[]): IWasmTarget[] {
        assert.ok(this.units.length == 0);
        if(this.options.parseAndCheck) {
            units.forEach(unit => this.addUnit(unit), this);
            if (this.options.declare) {
                this.declareUnits();
                if (this.options.compile) {
                    this.compileUnits();
                    if (this.options.assemble) {
                         return this.assembleModules();
                    }
                }
            }
        }
        return null;
    }

    addSource(path: string): CompilationUnit {
        console.log("Adding source: " + path);
        let unit = this.units.find(unit => unit.path == path);
        if(!unit) {
            unit = ComposeBuilder.parse_unit(path);
            this.addUnit(unit);
        }
        return unit;
    }

    addUnit(unit: CompilationUnit) {
        if(unit.path == "<memory>")
            this.units.push(unit);
        else {
            console.log("Adding unit: " + unit.path + " to " + this.units.map(u => u.path).join(", "));
            this.units.push(unit);
            console.log("Units paths: " + this.units.map(u => u.path).join(", "));
        }
        unit.context = Context.newGlobalsContext();
        unit.processImports(this.options);
        unit.populateContextAndCheck(Pipeline.parseAndRegisterBuiltins);
    }

    declareUnits() {
        this.units.forEach(unit => unit.declare());
    }

    private compileUnits() {
        this.units.forEach(unit => unit.compileAtoms(this.options.compilerFlags));
    }

    assembleModules(): IWasmTarget[] {
        return this.units.map(unit => {
            if(this.options.emitWat) {
                const wat = unit.module.emitText();
                console.log(wat);
            }
            const wasmTarget = this.options.provideTarget(unit);
            unit.assembleModule(wasmTarget, this.options.compilerFlags);
            return wasmTarget;
        })
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
