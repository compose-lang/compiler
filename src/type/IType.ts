import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";

export default interface IType {
    typeName: string;
    nullable: boolean;
    isAssignableFrom(context: Context, type: IType): boolean;
    count(): number;
    byteLength(): number;
    writeTo(target: IWasmTarget): void;

    prepareContext(context: Context): Context;

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType;
    compileAdd(context: Context, rightType: IType, module: WasmModule, body: FunctionBody, tryReverse: boolean): IType;

    checkSubtract(context: Context, rightType: IType): IType;

}
