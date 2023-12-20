import Loader from "./Loader.ts";
import RunnableModule from "./RunnableModule.ts";
import ISourceLocator from "./ISourceLocator.ts";
import Imports from "./Imports.ts";

export default class Importer {

    readonly imports: Imports;
    readonly runnables: RunnableModule[];
    readonly sourceLocator?: ISourceLocator

    constructor(imports: Imports, runnables: RunnableModule[], sourceLocator?: ISourceLocator) {
        this.imports = imports;
        this.runnables = runnables;
        this.sourceLocator = sourceLocator;
    }

    loadImport(elem: WebAssembly.ModuleImportDescriptor) {
        let moduleImports = this.imports[elem.module];
        if(!moduleImports) {
            const runnable = this.loadModule(elem.module);
            moduleImports = { runnable, imports: {} };
            this.imports[elem.module] = moduleImports;
        }
        let loadedSymbol = moduleImports.imports[elem.name];
        if(!loadedSymbol) {
            const exports = WebAssembly.Module.exports(moduleImports.runnable.module);
            const descriptor = exports.find(d => d.name == elem.name);
            assert(descriptor);
            assert.equal(elem.kind, descriptor.kind);
            moduleImports.imports[elem.name] = moduleImports.runnable.instance.exports[elem.name];
        }
    }

    loadModule(path: string): RunnableModule {
        let runnable = this.runnables.find(r => r.path == path);
        if(!runnable) {
            assert(this.sourceLocator);
            const source = this.sourceLocator(path);
            assert(source);
            const loader = new Loader(this.imports);
            runnable = loader.loadSource(source, this.runnables, this.sourceLocator);
        }
        return runnable;
    }


}
