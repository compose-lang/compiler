import RunnableModule from "./RunnableModule";
import ISourceLocator from "./ISourceLocator";
import IWasmSource from "./IWasmSource";
import assert from "assert";
import Importer from "./Importer";
import Imports from "./Imports";

export default class Loader {

    readonly imports: Imports;

    constructor(imports: Imports) {
        this.imports = imports;
    }

    loadSource(source: IWasmSource, runnables: RunnableModule[], sourceLocator?: ISourceLocator): RunnableModule {
        const module = source.compile();
        const required = WebAssembly.Module.imports(module);
        if (required.length > 0) {
            assert.ok(sourceLocator);
            const importer = new Importer(this.imports, runnables, sourceLocator);
            required.forEach(elem => importer.loadImport(elem));
        }
        const imports: WebAssembly.Imports = {};
        for(const key in this.imports)
            imports[key] = this.imports[key].imports;
        const instance = new WebAssembly.Instance(module, imports);
        const runnable = {path: source.path, module, instance};
        runnables.push(runnable);
        return runnable;
    }


}
