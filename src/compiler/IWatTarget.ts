import IWasmSource from "../runner/IWasmSource.ts";

export default interface IWatTarget {
    open(): void;
    close(): void;
    asWasmBuffer(): Uint8Array
    asWasmSource(): IWasmSource;
}
