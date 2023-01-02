import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IValueType from "../type/IValueType";
import DeclarationBase from "./DeclarationBase";
import Context from "../context/Context";
import IType from "../type/IType";
import IClassMember from "./IClassMember";

export default class AttributeDeclaration extends DeclarationBase implements IDeclaration, IClassMember {

    type: IValueType;

    constructor(id: Identifier, type: IValueType) {
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
