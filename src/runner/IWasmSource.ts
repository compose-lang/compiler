export default interface IWasmSource {
    readonly path: string;
    compile(): WebAssembly.Module;
}
