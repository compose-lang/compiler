import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";

export default interface IType {
    typeName: string;
    nullable: boolean;
    isAssignableFrom(context: Context, type: IType): boolean;
    count(): number;
    byteLength(): number;
    writeTo(target: IWasmTarget): void;
}
