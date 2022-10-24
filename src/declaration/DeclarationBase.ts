import CodeSection from "../builder/CodeSection";
import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";

export default abstract class DeclarationBase extends CodeSection implements IDeclaration {

    id: Identifier;

    protected constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }
}
