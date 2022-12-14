import IWasmTarget from "../compiler/IWasmTarget";

export default interface IType {
    typeName: string;
    byteLength(): number;
    writeTo(target: IWasmTarget): void;
}
