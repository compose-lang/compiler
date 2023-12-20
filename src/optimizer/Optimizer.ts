import IWasmTarget from "../compiler/IWasmTarget.ts";
import IWasmSource from "../runner/IWasmSource.ts";
import WasmBufferSource from "../runner/WasmBufferSource.ts";
import {Module} from "../binaryen/binaryen_ts.ts";

enum Flags {

}

export default abstract class Optimizer {

    static Flags = Flags;

    static optimize(source: IWasmTarget, flags: Flags, consumer?: (before: string, after: string) => void): IWasmSource {
        const module = Module.readBinary(source.asWasmBuffer());
        const before = consumer ? module.emitText() : null;
        module.optimize();
        const after = consumer ? module.emitText() : null;
        const bytes = module.emitBinary();
        module.dispose();
        if(consumer)
            consumer(before, after);
        return new WasmBufferSource(bytes);
    }
}
