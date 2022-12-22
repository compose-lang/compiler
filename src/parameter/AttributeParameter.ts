import IParameter from "./IParameter";
import CodeFragment from "../builder/CodeFragment";
import AttributeType from "../type/AttributeType";
import ILiteralExpression from "../literal/ILiteralExpression";

export default class AttributeParameter extends CodeFragment implements IParameter {

    type: AttributeType;
    defaultValue: ILiteralExpression;

    constructor(type: AttributeType, defaultValue: ILiteralExpression = null) {
        super();
        this.type = type;
        this.defaultValue = defaultValue;
    }

    get name(): string {
        return this.type.typeName;
    }

    toString() {
        return this.type.typeName;
    }
}
