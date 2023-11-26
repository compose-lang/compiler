import IWasmSource from "../runner/IWasmSource";

export default interface IWatTarget {
    open(): void;
    close(): void;
    asWasmBuffer(): Uint8Array
    asWasmSource(): IWasmSource;
}
