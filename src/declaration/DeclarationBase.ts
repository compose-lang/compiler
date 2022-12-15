import CodeFragment from "../builder/CodeFragment";
import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import Context from "../context/Context";
import ICompilable from "../compiler/ICompilable";

export default abstract class DeclarationBase extends CodeFragment implements IDeclaration {

    id: Identifier;

    protected constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    getCompilables(context: Context): ICompilable[] {
        return [];
    }

    abstract register(context: Context): void;
    abstract check(context: Context): void;

}
