/* example usage d8 LoadAndRunWasmInD8.js -- /Users/ericvergnaud/Development/compose/compiler/LoadAndRunWasm.d8.js */
const wasm = readbuffer(arguments[0]);
const module = new WebAssembly.Module(wasm);
const instance = new WebAssembly.Instance(module, {});
const func = instance.exports[method];
const result = func();
print(result);


