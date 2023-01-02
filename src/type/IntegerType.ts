import NumberType from "./NumberType";
import IntegerLiteral from "../literal/IntegerLiteral";
import IExpression from "../expression/IExpression";
import IType from "./IType";
import Context from "../context/Context";

export default abstract class IntegerType extends NumberType {

    defaultValue(): IExpression {
        return new IntegerLiteral("0");
    }

    checkBitsOperation(context: Context, rightType: IType): IType {
        if(rightType instanceof IntegerType)
            return this;
        else
            return super.checkBitsOperation(context, rightType);
    }

}
