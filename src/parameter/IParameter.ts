import ICodeFragment from "../builder/ICodeFragment";
import IType from "../type/IType";
import ILiteralExpression from "../literal/ILiteralExpression";
import Context from "../context/Context";
import WasmModule from "../module/wasm/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";

export default interface IParameter extends ICodeFragment {

    name: string;
    type: IType;
    defaultValue: ILiteralExpression

    equals(other: any): boolean;
    withType(iType: IType): IParameter;

    register(context: Context): void;
    declare(local: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void;
    // compile(context: Context, module: WasmModule, body: FunctionBody): void;
}
