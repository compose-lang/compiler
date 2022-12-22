import CodeFragment from "../builder/CodeFragment";
import IParameter from "./IParameter";
import Identifier from "../builder/Identifier";
import IDataType from "../type/IDataType";
import ILiteralExpression from "../literal/ILiteralExpression";

export default class TypedParameter extends CodeFragment implements IParameter {

    id: Identifier;
    type: IDataType;
    defaultValue: ILiteralExpression;

    constructor(id: Identifier, type: IDataType, defaultValue: ILiteralExpression = null) {
        super();
        this.id = id;
        this.type = type;
        this.defaultValue = defaultValue;
    }

    get name(): string {
        return this.id.value;
    }

    toString() {
        return this.id.value + ": " + this.type.toString();
    }

}
