import IWasmSource from "../runner/IWasmSource";

export default interface IWasmTarget {
    asWasmSource(): IWasmSource;
    writeCharsAsBytes(...chars: string[]): void;
    writeBytes(...bytes: number[]): void;
    writeBytesArray(bytes: number[]): void;
}
