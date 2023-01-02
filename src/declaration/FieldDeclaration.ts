import Identifier from "../builder/Identifier";
import Accessibility from "./Accessibility";
import IValueType from "../type/IValueType";
import IClassMember from "./IClassMember";

export default class FieldDeclaration implements IClassMember {

    accessibility: Accessibility;
    isStatic: boolean;
    id: Identifier;
    type: IValueType;

    constructor(accessibility: Accessibility, isStatic: boolean, id: Identifier, type: IValueType) {
        this.accessibility = accessibility;
        this.isStatic = isStatic;
        this.id = id;
        this.type = type;
    }

    get name(): string {
        return this.id.value;
    }


}
