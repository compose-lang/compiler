import CodeSection from "../builder/CodeSection";
import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default abstract class DeclarationBase extends CodeSection implements IDeclaration {

    id: Identifier;

    protected constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }


    abstract register(context: Context): void;
    abstract check(context: Context): void;
    abstract declare(context: Context, module: WasmModule): void;
    abstract compile(context: Context, module: WasmModule): void;

}
