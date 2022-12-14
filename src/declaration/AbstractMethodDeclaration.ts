import MethodDeclarationBase from "./MethodDeclarationBase";
import Prototype from "./Prototype";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default class AbstractMethodDeclaration extends MethodDeclarationBase {

    constructor(proto: Prototype) {
        super(proto);
    }

    register(context: Context): void {
        // TODO
    }

    check(context: Context): void {
        // TODO
    }

    declare(context: Context, module: WasmModule): void {
        // TODO
    }

    compile(context: Context, module: WasmModule): void {
        // TODO
    }

}
