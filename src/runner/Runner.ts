import IWasmSource from "./IWasmSource";

export default class Runner {

    static of(source: IWasmSource, imports?: any): Runner {
        const module = source.compile();
        const instance = new WebAssembly.Instance(module, imports);
        return new Runner(module, instance);
    }

    module: WebAssembly.Module;
    instance: WebAssembly.Instance;

    private constructor(module: WebAssembly.Module, instance: WebAssembly.Instance) {
        this.module = module;
        this.instance = instance;
    }

    runFunction<T>(method: string, ...args: any[]): T {
        const runnable = this.instance.exports[method] as Function;
        return runnable(args) as T;
    }

    readGlobal<T>(name: string): T {
        const global = this.instance.exports[name] as WebAssembly.Global;
        return global.value as T;
    }
}
