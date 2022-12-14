import ICodeSection from "../builder/ICodeSection";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default interface IDeclaration extends ICodeSection {

    name: string;

    register(context: Context): void;
    check(context: Context): void;
    declare(globals: Context, module: WasmModule): void;
    compile(context: Context, module: WasmModule): void;

}
