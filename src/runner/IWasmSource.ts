export default interface IWasmSource {
    readonly url: URL;
    compile(): WebAssembly.Module;
}
