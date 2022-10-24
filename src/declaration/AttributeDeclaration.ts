import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IDataType from "../type/IDataType";
import DeclarationBase from "./DeclarationBase";

export default class AttributeDeclaration extends DeclarationBase implements IDeclaration {

    type: IDataType;

    constructor(id: Identifier, type: IDataType) {
        super(id);
        this.type = type;
    }

}
