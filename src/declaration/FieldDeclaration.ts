import Identifier from "../builder/Identifier.ts";
import IValueType from "../type/IValueType.ts";
import IClassMember from "./IClassMember.ts";
import FieldProperties from "./FieldProperties.ts";

export default class FieldDeclaration implements IClassMember {

    properties: FieldProperties;
    id: Identifier;
    type: IValueType;

    constructor(properties: FieldProperties, id: Identifier, type: IValueType) {
        this.properties = properties;
        this.id = id;
        this.type = type;
    }

    get name(): string {
        return this.id.value;
    }

    get accessibility() {
        return this.properties.accessibility;
    }

    get isStatic() {
        return this.properties.isStatic;
    }

    get isReadOnly() {
        return this.properties.isReadOnly;
    }

    get isNullable() {
        return this.type.isNullable;
    }

}
