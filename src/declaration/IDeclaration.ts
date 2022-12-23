import ICodeFragment from "../builder/ICodeFragment";
import Context from "../context/Context";
import Annotation from "../builder/Annotation";
import WasmModule from "../module/WasmModule";

export default interface IDeclaration extends ICodeFragment {

    name: string;
    annotations: Annotation[];

    register(context: Context): void;
    check(context: Context): void;
    declare(context: Context, module: WasmModule): void;
}
