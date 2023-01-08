import TypeBase from "./TypeBase";
import IExpression from "../expression/IExpression";
import NullLiteral from "../literal/NullLiteral";

export default abstract class UserType extends TypeBase {

    defaultValue(): IExpression {
        return new NullLiteral();
    }

}
