import IWasmTarget from "../compiler/IWasmTarget";

export default interface IType {
    typeName: string;
    nullable: boolean;
    isAssignableFrom(type: IType): boolean;
    byteLength(): number;
    writeTo(target: IWasmTarget): void;
}
