import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IDataType from "../type/IDataType";
import CodeSection from "../builder/CodeSection";

export default class AttributeDeclaration extends CodeSection implements IDeclaration {

    id: Identifier;
    type: IDataType;

    constructor(id: Identifier, type: IDataType) {
        super();
        this.id = id;
        this.type = type;
    }

    get name(): string {
        return this.id.value;
    }
}
