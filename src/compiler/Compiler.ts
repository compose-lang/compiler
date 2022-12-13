import CompilationUnit from "./CompilationUnit";
import IWasmTarget from "./IWasmTarget";
import WasmModule from "../module/WasmModule";

export default class Compiler {

    module = new WasmModule();

    compile(unit: CompilationUnit, target: IWasmTarget) {
        this.module.writeTo(target);
    }
}
