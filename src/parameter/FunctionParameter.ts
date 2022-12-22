import CodeFragment from "../builder/CodeFragment";
import IParameter from "./IParameter";
import Identifier from "../builder/Identifier";
import FunctionType from "../type/FunctionType";
import ILiteralExpression from "../literal/ILiteralExpression";

export default class FunctionParameter extends CodeFragment implements IParameter {

    id: Identifier;
    type: FunctionType;
    defaultValue: ILiteralExpression;

    constructor(id: Identifier, type: FunctionType, defaultValue: ILiteralExpression = null) {
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
