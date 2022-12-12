export default interface IWasmSource {

    compile(): WebAssembly.Module;
}
