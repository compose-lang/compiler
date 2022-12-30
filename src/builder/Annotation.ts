import CodeFragment from "./CodeFragment";
import Identifier from "./Identifier";
import ILiteralExpression from "../literal/ILiteralExpression";

export default class Annotation extends CodeFragment {

    id: Identifier;
    value: ILiteralExpression;

    constructor(id: Identifier, value: ILiteralExpression) {
        super();
        this.id = id;
        this.value = value;
    }

    get name(): string {
        return this.id.value;
    }

}
