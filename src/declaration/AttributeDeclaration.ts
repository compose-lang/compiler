import IDeclaration from "./IDeclaration.ts";
import Identifier from "../builder/Identifier.ts";
import IValueType from "../type/IValueType.ts";
import DeclarationBase from "./DeclarationBase.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import IClassMember from "./IClassMember.ts";

export default class AttributeDeclaration extends DeclarationBase implements IDeclaration, IClassMember {

    type: IValueType;

    constructor(id: Identifier, type: IValueType) {
        super(id);
        this.type = type;
    }

    register(context: Context): void {
        context.registerAttribute(this);
    }

    check(context: Context): IType {
        // TODO
        return this.type;

    }

}
