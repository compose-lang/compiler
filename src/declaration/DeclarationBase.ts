import CodeFragment from "../builder/CodeFragment";
import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import Context from "../context/Context";
import Annotation from "../builder/Annotation";
import IDeclarable from "../compiler/IDeclarable";

export default abstract class DeclarationBase extends CodeFragment implements IDeclaration {

    annotations: Annotation[];
    id: Identifier;

    protected constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    getDeclarables(context: Context): IDeclarable[] {
        return [];
    }

    isExported() {
        return this.annotations && this.annotations.some(a => a.name === "@Export");
    }

    abstract register(context: Context): void;
    abstract check(context: Context): void;

}
