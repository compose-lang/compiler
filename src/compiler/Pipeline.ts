import CompilationUnit from "./CompilationUnit.ts";
import IWasmTarget from "./IWasmTarget.ts";
import Context from "../context/Context.ts";
import ComposeBuilder from "../builder/ComposeBuilder.ts";
import PipelineOptions from "./PipelineOptions.ts";
import {dirname, fileExistsSync, readDirSync, writePathSync} from "../platform/deno/FileUtils.ts";
import CiCdUtils from "../utils/CiCdUtils.ts";
import { FileStream } from "../platform/deno/Antlr4FileStream.ts";
import { CharStream } from "npm:antlr4";
import {fileURLToPath} from "../platform/deno/URLUtils.ts";
import WasmModule from "../module/WasmModule.ts";
import ValidatorErrorFilter from "./ValidatorErrorFilter.ts";
import Binaryen from "../binaryen/binaryen_raw_wasm.js";
const JSModule = await Binaryen();
type Writer = (...data: any[]) => void;
const out: Writer = JSModule['utils']['out'];

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
        const unitsToProcess = new Set<CompilationUnit>(units);
        const processedUnits = new Set<CompilationUnit>();
        while(unitsToProcess.size > 0) {
            const unit = unitsToProcess.values().next().value;
            unitsToProcess.delete(unit);
            processedUnits.add(unit);
            if (this.options.check) {
                this.addUnit(unit);
                if (this.options.declare) {
                    unit.declare(this.options)
                    if (this.options.compile) {
                        unit.compileAtoms(this.options);
                    }
                }
            } else {
                this.units.push(unit)
            }
            // add units discovered during compilation
            this.units.filter(unit => !processedUnits.has(unit)).forEach(unit => unitsToProcess.add(unit));
        }
        if (processedUnits.size > 0 && this.options.assemble) {
            return this.assembleModules();
        } else {
            return null;
        }
    }

    addSource(url: URL): CompilationUnit {
        if (this.options.logUrls)
            console.log("Adding source: " + url.toString());
        let unit = this.units.find(unit => unit.url == url);
        if (!unit) {
            unit = ComposeBuilder.parse_unit_stream(new FileStream(url.pathname));
            this.addUnit(unit);
        }
        return unit;
    }

    addUnit(unit: CompilationUnit) {
        if(this.units.indexOf(unit) >= 0)
            return;
        if (this.options.logUrls && unit.url.protocol != "blob:")
            console.log("Adding unit: " + unit.url + " to " + this.units.map(u => u.url.toString()).join(", "));
        this.units.push(unit);
        if (this.options.logUrls && unit.url.protocol != "blob:")
            console.log("Units paths: " + this.units.map(u => u.url.toString()).join(", "));
        unit.context = Context.newGlobalsContext(className => this.locateRuntimeClassContext(className));
        unit.processImports(this.options);
        unit.populateContextAndCheck(Pipeline.parseAndRegisterBuiltins, this.options);
    }

    locateRuntimeClassContext(className: string): Context {
        const __filename = fileURLToPath(import.meta.url);
        let __dirname = dirname(dirname(dirname(__filename))) + "/runtime";
        const path = Array.from(readDirSync(__dirname))
            .filter(entry => entry.isDirectory)
            .map(entry => __dirname + "/" + entry.name + "/" + className + ".cots")
            .find( path => fileExistsSync(path));
        if(!path)
            throw new Error(`Could not locate '${className}' runtime class!`);
        const unit = this.addSource(new URL("file://" + path));
        // TODO support GitHub URLs
        __dirname = dirname(path);
        unit.module.url = new URL("file://" + __dirname + "/" + className + ".cots");
        // end TODO
        return unit.context;
    }

    assembleModules(): IWasmTarget[] {
        return this.units.map(unit => {
            if(this.options.validate)
                this.validateModule(unit.module);
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

    private validateModule(module: WasmModule) {
        const filter = new ValidatorErrorFilter(out);
        module.validate((...data: any[]) => filter.logMany(data));
        filter.flush();
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
