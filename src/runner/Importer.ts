import Loader from "./Loader.ts";
import RunnableModule from "./RunnableModule.ts";
import ISourceLocator from "./ISourceLocator.ts";
import Imports from "./Imports.ts";
import { assertTrue, assertEquals } from "../../deps.ts";

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
            const url = new URL(elem.module);
            const runnable = this.loadModule(url);
            moduleImports = { runnable, imports: {} };
            this.imports[elem.module] = moduleImports;
        }
        const loadedSymbol = moduleImports.imports[elem.name];
        if(!loadedSymbol) {
            const exports = WebAssembly.Module.exports(moduleImports.runnable.module);
            const descriptor = exports.find(d => d.name == elem.name);
            assertTrue(descriptor);
            assertEquals(elem.kind, descriptor.kind);
            moduleImports.imports[elem.name] = moduleImports.runnable.instance.exports[elem.name];
        }
    }

    loadModule(url: URL): RunnableModule {
        let runnable = this.runnables.find(r => r.url == url);
        if(!runnable) {
            assertTrue(this.sourceLocator);
            const source = this.sourceLocator(url);
            assertTrue(source);
            const loader = new Loader(this.imports);
            runnable = loader.loadSource(source, this.runnables, this.sourceLocator);
        }
        return runnable;
    }


}
