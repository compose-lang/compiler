import IWasmTarget from "../compiler/IWasmTarget";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";

export default interface IType {
    typeName: string;
    byteLength(): number;
    writeTo(target: IWasmTarget): void;

    // declare(context: Context, module: WasmModule): void;
}
