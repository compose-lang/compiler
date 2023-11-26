import IWatTarget from "./IWatTarget";
import IWasmSource from "../runner/IWasmSource";

export default abstract class WatTargetBase implements IWatTarget {

    abstract open(): void;
    abstract close(): void;
    abstract asWasmBuffer(): Uint8Array;
    abstract asWasmSource(): IWasmSource;


};
