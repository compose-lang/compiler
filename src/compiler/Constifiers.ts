import IExpression from "../expression/IExpression.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import Int32Type from "../type/Int32Type.ts";
import IType from "../type/IType.ts";
import IntegerLiteral from "../literal/IntegerLiteral.ts";
import { assert } from "../../deps.ts"

type IConstifier = (left: IExpression, right: IExpression) => IExpression;

class BinaryConstifiers extends Map<string, Map<string,Map<BinaryOperator,IConstifier>>> {

    constructor() {
        super();
        this.addConstifier(Int32Type.instance, Int32Type.instance, BinaryOperator.PLUS, BinaryConstifiers.constifyInt32PlusInt32);
    }

    getConstifier(leftType: IType, rightType: IType, operator: BinaryOperator): IConstifier {
        const leftMap = this.get(leftType.typeName);
        const rightMap = leftMap ? leftMap.get(rightType.typeName) : null;
        return rightMap ? rightMap.get(operator) || null : null;
    }

    private addConstifier(leftType: Int32Type, rightType: Int32Type, operator: BinaryOperator, constifier: (left: IExpression, right: IExpression) => IExpression) {
        if(!this.has(leftType.typeName))
            this.set(leftType.typeName, new Map<string, Map<BinaryOperator, IConstifier>>());
        const leftMap = this.get(leftType.typeName);
        if(!leftMap.has(rightType.typeName))
            leftMap.set(rightType.typeName, new Map<BinaryOperator, IConstifier>());
        const rightMap = leftMap.get(rightType.typeName);
        assert(!rightMap.has(operator));
        rightMap.set(operator, constifier);
    }

    static constifyInt32PlusInt32(left: IExpression, right: IExpression) {
        assert(left instanceof IntegerLiteral);
        const leftValue = left.value;
        assert(right instanceof IntegerLiteral);
        const rightValue = right.value;
        return new IntegerLiteral(Number(leftValue + rightValue).toString(10));
    }

}
export const BINARY_CONSTIFIERS = new BinaryConstifiers();
