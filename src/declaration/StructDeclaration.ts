import IDeclaration from "./IDeclaration.ts";
import Identifier from "../builder/Identifier.ts";
import IdentifierList from "../builder/IdentifierList.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import StructType from "../type/StructType.ts";
import StructDeclarationBase from "./StructDeclarationBase.ts";
import FieldList from "../builder/FieldList.ts";

export default class StructDeclaration extends StructDeclarationBase implements IDeclaration {

    getIType(context: Context) {
        return new StructType(this.id, this);
    }
    register(context: Context): void {
        context.registerStruct(this);
    }

    check(context: Context): IType {
        // TODO this.attributes.forEach(a => a.check(context));
        // TODO this.parents.forEach(p => p.check)
        return new StructType(this.id, this);
    }

}
