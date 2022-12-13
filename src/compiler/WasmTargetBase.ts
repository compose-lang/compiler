import IWasmTarget from "./IWasmTarget";
import IWasmSource from "../runner/IWasmSource";

export default abstract class WasmTargetBase implements IWasmTarget {

    abstract asWasmSource(): IWasmSource;

    writeCharsAsBytes(...chars: string[]): void {
        const bytes = chars.map(c => c.charCodeAt(0));
        this.writeBytesArray(bytes);
    }

    writeBytes(...bytes: number[]): void {
        this.writeBytesArray(bytes);
    }

    abstract writeBytesArray(bytes: number[]): void;

}
