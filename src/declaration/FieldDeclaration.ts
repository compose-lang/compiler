import Identifier from "../builder/Identifier.ts";
import Accessibility from "./Accessibility.ts";
import IValueType from "../type/IValueType.ts";
import IClassMember from "./IClassMember.ts";

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
