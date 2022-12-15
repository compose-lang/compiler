import IParameter from "./IParameter";
import CodeFragment from "../builder/CodeFragment";
import AttributeType from "../type/AttributeType";

export default class AttributeParameter extends CodeFragment implements IParameter {

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
