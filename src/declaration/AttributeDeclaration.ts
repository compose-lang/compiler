import IDeclaration from "./IDeclaration";
import Section from "../builder/Section";
import IType from "../type/IType";
import Identifier from "../builder/Identifier";

export default class AttributeDeclaration implements IDeclaration {

    section: Section;
    id: Identifier;
    type: IType;

    get name(): string {
        return this.id.value;
    }
}