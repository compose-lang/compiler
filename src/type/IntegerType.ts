import NumberType from "./NumberType";
import IntegerLiteral from "../literal/IntegerLiteral";
import IExpression from "../expression/IExpression";
import IType from "./IType";
import Context from "../context/Context";
import BinaryOperator from "../expression/BinaryOperator";
import UnaryOperator from "../expression/UnaryOperator";

export default abstract class IntegerType extends NumberType {

    defaultValue(): IExpression {
        return new IntegerLiteral("0");
    }

    checkBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType {
        if(rightType instanceof IntegerType)
            return this;
        else
            return super.checkBitsOperator(context, operator, rightType);
    }

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType {
        switch(operator) {
            case UnaryOperator.PRE_INC:
            case UnaryOperator.PRE_DEC:
            case UnaryOperator.POST_INC:
            case UnaryOperator.POST_DEC:
                return this;
        }
        return super.checkUnaryOperator(context, operator);
    }

}
