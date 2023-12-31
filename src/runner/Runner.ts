import IWasmSource from "./IWasmSource.ts";
import Loader from "./Loader.ts";
import RunnableModule from "./RunnableModule.ts";
import ISourceLocator from "./ISourceLocator.ts";
import Imports from "./Imports.ts";

export default class Runner {

    public static of(source: IWasmSource, externals?: WebAssembly.Imports, sourceLocator?: ISourceLocator): Runner {
        const runnables: RunnableModule[] = [];
        const imports: Imports = {};
        if(externals) {
            for(const key in externals)
                imports[key] = { runnable: null, imports: externals[key] };
        }
        const loader = new Loader(imports);
        const runnable = loader.loadSource(source, runnables, sourceLocator);
        return new Runner(runnable);
    }

    readonly runnable: RunnableModule;

    private constructor(runnable: RunnableModule) {
        this.runnable = runnable;
    }

    readFunction(method: string): Function | null {
        return this.runnable.instance.exports[method] as Function || null;
    }

    runFunction<T>(method: string, ...args: any[]): T {
        const runnable = this.readFunction(method);
        return runnable.apply(null, args) as T;
    }

    readGlobal<T>(name: string): T {
        const global = this.runnable.instance.exports[name] as WebAssembly.Global;
        return global ? global.value as T : null;
    }

}
