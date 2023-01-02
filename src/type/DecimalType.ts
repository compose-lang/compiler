import NumberType from "./NumberType";
import IExpression from "../expression/IExpression";
import DecimalLiteral from "../literal/DecimalLiteral";

export default abstract class DecimalType extends NumberType {

    defaultValue(): IExpression {
        return new DecimalLiteral("0.0");
    }

}
