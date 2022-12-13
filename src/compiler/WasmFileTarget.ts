import IWasmSource from "../runner/IWasmSource";
import WasmTargetBase from "./WasmTargetBase";

export default class WasmFileTarget extends WasmTargetBase {

    targetPath: string;

    constructor(targetPath: string) {
        super();
        this.targetPath = targetPath;
    }

    asWasmSource(): IWasmSource {
        return undefined;
    }

    writeBytesArray(bytes: number[]): void {
    }

};
