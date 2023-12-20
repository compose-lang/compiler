import IExpression from "../expression/IExpression.ts";

export default interface ILiteralExpression extends IExpression {
    text: string;
}
