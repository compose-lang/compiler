import IWasmSource from "../runner/IWasmSource";

export default interface IWasmTarget {
    asWasmSource(): IWasmSource;
    writeUInts(...uints: number[]): void;
    writeChars(...chars: string[]): void;
    writeBytes(...bytes: number[]): void;
    writeBytesArray(bytes: number[]): void;
    writeUint8Array(bytes: Uint8Array): void;
}
