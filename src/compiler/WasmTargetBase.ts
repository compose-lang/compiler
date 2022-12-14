import IWasmTarget from "./IWasmTarget";
import IWasmSource from "../runner/IWasmSource";

export default abstract class WasmTargetBase implements IWasmTarget {

    abstract asWasmSource(): IWasmSource;
    abstract writeBytesArray(bytes: number[]): void;
    abstract writeUint8Array(bytes: Uint8Array): void;

    writeUInts(...uints: number[]): void {
        const bytes: number[] = [];
        uints.forEach(uint => {
            let _7bits = uint & 0x7F;
            uint >>= 7;
            while (uint != 0) {
                bytes.push(_7bits | 0x80);
                _7bits = uint & 0x7F;
                uint >>= 7;
            }
            bytes.push(_7bits);
        })
        this.writeBytesArray(bytes);
    }

    writeChars(...chars: string[]): void {
        const bytes = chars.map(c => c.charCodeAt(0));
        this.writeBytesArray(bytes);
    }

    writeBytes(...bytes: number[]): void {
        this.writeBytesArray(bytes);
    }

}
