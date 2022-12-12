import IWasmSource from "./IWasmSource";

export default class Runner {

    static of(source: IWasmSource, imports: any): Runner {
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

    run(method: string, ...args: any[]): any {
        const runnable = this.instance.exports[method] as (...args: any[]) => any;
        return runnable(args);
    }
}
