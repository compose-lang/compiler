import ICodeFragment from "../builder/ICodeFragment.ts";
import IType from "../type/IType.ts";
import ILiteralExpression from "../literal/ILiteralExpression.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";

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
