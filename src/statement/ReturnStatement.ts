import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";

export default class ReturnStatement extends StatementBase {

    expression: IExpression | null;

    constructor(expression: IExpression | null) {
        super();
        this.expression = expression;
    }
}
