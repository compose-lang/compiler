import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import FileSourceResolver from "./FileSourceResolver";
import WasmBufferTarget from "./WasmBufferTarget";
import CompilerFlags from "./CompilerFlags";

export default class PipelineOptions {

    static DEFAULTS = new PipelineOptions();

    parseAndCheck = true;
    declare = true;
    compile = true;
    emitWat: true;
    assemble = true;
    optimize = false;
    merge = false;
    compilerFlags = CompilerFlags.DEFAULTS;
    resolveSource: (source: string, path: string) => string = FileSourceResolver;
    provideTarget: (unit: CompilationUnit) => IWasmTarget = () => new WasmBufferTarget();
    sourceAdded: (path: string) => CompilationUnit = null;

    withUnitAdded(unitAdded: (path: string) => CompilationUnit): PipelineOptions {
        const options = new PipelineOptions();
        Object.assign(options, this);
        options.sourceAdded = unitAdded;
        return options;
    }
}
