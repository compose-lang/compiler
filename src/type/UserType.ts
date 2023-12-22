import TypeBase from "./TypeBase.ts";
import IExpression from "../expression/IExpression.ts";
import NullLiteral from "../literal/NullLiteral.ts";

export default abstract class UserType extends TypeBase {

    defaultValue(): IExpression {
        return new NullLiteral();
    }

}
