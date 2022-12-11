import ExpressionBase from "./ExpressionBase";
import Identifier from "../builder/Identifier";

export default class InstanceExpression extends ExpressionBase {

    id: Identifier

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

}
