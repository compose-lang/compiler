import IParameter from "./IParameter";
import CodeSection from "../builder/CodeSection";
import AttributeType from "../type/AttributeType";

export default class AttributeParameter extends CodeSection implements IParameter {

    type: AttributeType;

    constructor(type: AttributeType) {
        super();
        this.type = type;
    }

    get name(): string {
        return this.type.typeName;
    }

    toString() {
        return this.type.typeName;
    }
}
