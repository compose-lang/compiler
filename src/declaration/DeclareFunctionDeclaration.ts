import FunctionDeclarationBase from "./FunctionDeclarationBase.ts";
import Prototype from "./Prototype.ts";
import Context from "../context/Context.ts";
import Accessibility from "./Accessibility.ts";
import IType from "../type/IType.ts";
import WasmModule from "../module/WasmModule.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import { assertTrue } from "../../deps.ts";
import FunctionBody from "../module/FunctionBody.ts";

export default class DeclareFunctionDeclaration extends FunctionDeclarationBase {

    constructor(accessibility: Accessibility, proto: Prototype) {
        super(accessibility, proto);
    }

    get isStatic(): boolean {
        return false;
    }

    check(context: Context): IType {
        assertTrue(false);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body?: FunctionBody): void {
        assertTrue(false);
    }


}
