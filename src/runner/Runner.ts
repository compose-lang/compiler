import IWasmSource from "./IWasmSource";
import Loader from "./Loader";
import RunnableModule from "./RunnableModule";
import ISourceLocator from "./ISourceLocator";
import Imports from "./Imports";

export default class Runner {

    static of(source: IWasmSource, externals?: WebAssembly.Imports, sourceLocator?: ISourceLocator): Runner {
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

    readFunction(method: string): Function {
        return this.runnable.instance.exports[method] as Function;
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
