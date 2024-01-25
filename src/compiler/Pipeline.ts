import CompilationUnit from "./CompilationUnit.ts";
import IWasmTarget from "./IWasmTarget.ts";
import Context from "../context/Context.ts";
import ComposeBuilder from "../builder/ComposeBuilder.ts";
import PipelineOptions from "./PipelineOptions.ts";
import { writePathSync } from "../platform/deno/FileUtils.ts";
import CiCdUtils from "../utils/CiCdUtils.ts";
import { FileStream } from "../platform/deno/Antlr4FileStream.ts";
import { CharStream } from "npm:antlr4";

// TODO import errors_code from "../../runtime/util/error.cots" with { type: "text" };
const BUILTINS_CODE: string[] = [ /* errors_code as unknown as string */ ];

export default class Pipeline {

    readonly units: CompilationUnit[] = [];
    readonly options = PipelineOptions.DEFAULTS;

    constructor(options = PipelineOptions.DEFAULTS) {
        if (!options.sourceAdded)
            options = options.with(options => options.sourceAdded = path => this.addSource(path));
        this.options = options;
    }

    build(units: CompilationUnit[]): IWasmTarget[] {
        if (this.options.parseAndCheck) {
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
        if (this.options.logPaths)
            console.log("Adding source: " + path);
        let unit = this.units.find(unit => unit.path == path);
        if (!unit) {
            unit = ComposeBuilder.parse_unit_stream(new FileStream(path));
            this.addUnit(unit);
        }
        return unit;
    }

    addUnit(unit: CompilationUnit) {
        if (this.options.logPaths && unit.path != "<memory>")
            console.log("Adding unit: " + unit.path + " to " + this.units.map(u => u.path).join(", "));
        this.units.push(unit);
        if (this.options.logPaths && unit.path != "<memory>")
            console.log("Units paths: " + this.units.map(u => u.path).join(", "));
        unit.context = Context.newGlobalsContext(className => this.locateRuntimeClassContext(className));
        unit.processImports(this.options);
        unit.populateContextAndCheck(Pipeline.parseAndRegisterBuiltins, this.options);
    }

    locateRuntimeClassContext(className: string): Context {
        throw new Error("Not implemented yet!")
    }

    declareUnits() {
        this.units.forEach(unit => unit.declare(this.options), this);
    }

    private compileUnits() {
        this.units.forEach(unit => unit.compileAtoms(this.options), this);
    }

    assembleModules(): IWasmTarget[] {
        return this.units.map(unit => {
            if(this.options.validate)
                unit.module.validate();
            if (this.options.emitWat) {
                const wat = unit.module.emitText();
                if(!CiCdUtils.isRunningInCI())
                    console.log(wat);
                if(this.options.dumpWatPath)
                    writePathSync(this.options.dumpWatPath, wat);
            }
            const wasmTarget = this.options.provideTarget(unit);
            unit.assembleModule(wasmTarget, this.options);
            if(this.options.dumpWasmPath) {
                const buffer = wasmTarget.asWasmBuffer();
                writePathSync(this.options.dumpWasmPath, buffer);
            }
            return wasmTarget;
        })
    }

    private static parseAndRegisterBuiltins(context: Context) {
        BUILTINS_CODE.forEach(code => Pipeline.parseAndRegisterBuiltin(code, context));
    }

    private static parseAndRegisterBuiltin(code: string, context: Context) {
        const stream = new CharStream(code);
        const unit = ComposeBuilder.parse_unit_stream(stream);
        unit.declarations.forEach(decl => decl.register(context));
    }

}
