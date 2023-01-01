import IWasmTarget from "./IWasmTarget";
import IWasmSource from "../runner/IWasmSource";
import LEB128 from "../utils/LEB128";

export default abstract class WasmTargetBase implements IWasmTarget {

    abstract asWasmBuffer(): Uint8Array;
    abstract asWasmSource(): IWasmSource;
    abstract writeBytesArray(bytes: number[]): void;
    abstract writeUint8Array(bytes: Uint8Array): void;

    writeUInts(...uints: number[]): void {
        this.writeUIntsArray(uints);
    }

    writeUIntsArray(uints: number[]): void {
        const bytes: number[] = [];
        uints.forEach(uint => LEB128.emitUnsigned(uint, byte => bytes.push(byte)));
        this.writeBytesArray(bytes);
    }

    writeChars(...chars: string[]): void {
        const bytes = chars.map(c => c.charCodeAt(0));
        this.writeBytesArray(bytes);
    }

    writeString(str: string): void {
        const bytes = Array.from(str).map(c => c.charCodeAt(0));
        this.writeUInts(bytes.length);
        this.writeBytesArray(bytes);
    }

    writeBytes(...bytes: number[]): void {
        this.writeBytesArray(bytes);
    }

}
