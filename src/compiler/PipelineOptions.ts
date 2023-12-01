import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import FileSourceResolver from "./FileSourceResolver";
import WasmBufferTarget from "./WasmBufferTarget";
import CompilerFlags from "./CompilerFlags";
import CiCdUtils from "../utils/CiCdUtils";

export default class PipelineOptions {

    static DEFAULTS = new PipelineOptions();

    parseAndCheck = true;
    declare = true;
    compile = true;
    emitWat = !CiCdUtils.isCiCd();
    assemble = true;
    optimize = false;
    merge = false;
    logPaths = false;
    compilerFlags = CompilerFlags.DEFAULTS;
    resolveSource: (source: string, path: string) => string = FileSourceResolver;
    provideTarget: (unit: CompilationUnit) => IWasmTarget = () => new WasmBufferTarget();
    sourceAdded: (path: string) => CompilationUnit;

    with(setter: (options: PipelineOptions) => void) {
        const options = new PipelineOptions();
        Object.assign(options, this);
        setter(options);
        return options;
    }

}
