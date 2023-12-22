import CodeFragment from "./CodeFragment.ts";
import Identifier from "./Identifier.ts";
import ILiteralExpression from "../literal/ILiteralExpression.ts";

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
