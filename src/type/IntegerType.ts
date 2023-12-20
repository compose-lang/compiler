import NumberType from "./NumberType.ts";
import IntegerLiteral from "../literal/IntegerLiteral.ts";
import IExpression from "../expression/IExpression.ts";
import IType from "./IType.ts";
import Context from "../context/Context.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";

export default abstract class IntegerType extends NumberType {

    defaultValue(): IExpression {
        return new IntegerLiteral("0");
    }

    checkBinaryBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType {
        if(rightType instanceof IntegerType)
            return this;
        else
            return super.checkBinaryBitsOperator(context, operator, rightType);
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
