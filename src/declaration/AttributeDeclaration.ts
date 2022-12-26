import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IDataType from "../type/IDataType";
import DeclarationBase from "./DeclarationBase";
import Context from "../context/Context";
import IType from "../type/IType";

export default class AttributeDeclaration extends DeclarationBase implements IDeclaration {

    type: IDataType;

    constructor(id: Identifier, type: IDataType) {
        super(id);
        this.type = type;
    }

    register(context: Context): void {
        // TODO
    }

    check(context: Context): IType {
        // TODO
        return this.type;

    }

}
