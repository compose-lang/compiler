import NumberType from "./NumberType.ts";
import IExpression from "../expression/IExpression.ts";
import DecimalLiteral from "../literal/DecimalLiteral.ts";

export default abstract class DecimalType extends NumberType {

    defaultValue(): IExpression {
        return new DecimalLiteral("0.0");
    }

}
