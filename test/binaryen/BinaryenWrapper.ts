// @ts-ignore
import Binaryen from "../../src/binaryen/binaryen_wasm_ts.js.ts"

type onRuntimeInitialized = (super_: Function ) => () => void;

async function BinaryenWrapper(initializer?: onRuntimeInitialized) {
    const Module = await Binaryen();

    // 'Module' interface
    Module['Module'] = function() {
        wrapModule(Module['_BinaryenModuleCreate'](), this);
    };

    function wrapModule(module: Object, self = {}) {
        return self;
    }

    Module['wrapModule'] = wrapModule;

    Module['stuff'] = "stuff";

    return Module;
}

export default BinaryenWrapper;
