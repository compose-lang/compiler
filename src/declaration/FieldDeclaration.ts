import Identifier from "../builder/Identifier";
import Accessibility from "./Accessibility";
import IDataType from "../type/IDataType";

export default class FieldDeclaration {

    accessibility: Accessibility;
    isStatic: boolean;
    id: Identifier;
    type: IDataType;

    constructor(accessibility: Accessibility, isStatic: boolean, id: Identifier, type: IDataType) {
        this.accessibility = accessibility;
        this.isStatic = isStatic;
        this.id = id;
        this.type = type;
    }

    get name(): string {
        return this.id.value;
    }


}
