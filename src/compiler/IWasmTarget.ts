import IWasmSource from "../runner/IWasmSource";

export default interface IWasmTarget {
    open(): void;
    close(): void;
    asWasmBuffer(): Uint8Array
    asWasmSource(): IWasmSource;
    writeUInts(...uints: number[]): void;
    writeUIntsArray(uints: number[]): void;
    writeChars(...chars: string[]): void;
    writeString(str: string): void;
    writeBytes(...bytes: number[]): void;
    writeBytesArray(bytes: number[]): void;
    writeUint8Array(bytes: Uint8Array): void;

}
