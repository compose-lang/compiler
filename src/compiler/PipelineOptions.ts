import CompilationUnit from "./CompilationUnit.ts";
import IWasmTarget from "./IWasmTarget.ts";
import FileSourceResolver from "./FileSourceResolver.ts";
import WasmBufferTarget from "./WasmBufferTarget.ts";
import CompilerFlags from "./CompilerFlags.ts";
import CiCdUtils from "../utils/CiCdUtils.ts";

export default class PipelineOptions {

    static DEFAULTS = new PipelineOptions();

    parseAndCheck = true;
    declare = true;
    compile = true;
    validate = true;
    emitWat = !CiCdUtils.isRunningInCI();
    assemble = true;
    optimize = false;
    merge = false;
    logUrls = false;
    debugDir: string = null;
    dumpWatPath: string = null;
    dumpWasmPath: string = null;
    compilerFlags = CompilerFlags.DEFAULTS;
    resolveSource: (source: URL, path: string) => URL = FileSourceResolver;
    provideTarget: (unit: CompilationUnit) => IWasmTarget = () => new WasmBufferTarget();
    sourceAdded: (ur: URL) => CompilationUnit = null;

    with(setter: (options: PipelineOptions) => void) {
        const options = new PipelineOptions();
        Object.assign(options, this);
        setter(options);
        return options;
    }

}
