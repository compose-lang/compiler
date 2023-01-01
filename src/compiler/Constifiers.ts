import IExpression from "../expression/IExpression";
import Operator from "../expression/Operator";
import Int32Type from "../type/Int32Type";
import IType from "../type/IType";
import IntegerLiteral from "../literal/IntegerLiteral";
import assert from "assert";

type IConstifier = (left: IExpression, right: IExpression) => IExpression;

class BinaryConstifiers extends Map<string, Map<string,Map<Operator,IConstifier>>> {

    constructor() {
        super();
        this.addConstifier(Int32Type.instance, Int32Type.instance, Operator.PLUS, BinaryConstifiers.constifyInt32PlusInt32);
    }

    getConstifier(leftType: IType, rightType: IType, operator: Operator): IConstifier {
        const leftMap = this.get(leftType.typeName);
        const rightMap = leftMap ? leftMap.get(rightType.typeName) : null;
        return rightMap ? rightMap.get(operator) || null : null;
    }

    private addConstifier(leftType: Int32Type, rightType: Int32Type, operator: Operator, constifier: (left: IExpression, right: IExpression) => IExpression) {
        if(!this.has(leftType.typeName))
            this.set(leftType.typeName, new Map<string, Map<Operator, IConstifier>>());
        const leftMap = this.get(leftType.typeName);
        if(!leftMap.has(rightType.typeName))
            leftMap.set(rightType.typeName, new Map<Operator, IConstifier>());
        const rightMap = leftMap.get(rightType.typeName);
        assert.ok(!rightMap.has(operator));
        rightMap.set(operator, constifier);
    }

    static constifyInt32PlusInt32(left: IExpression, right: IExpression) {
        assert.ok(left instanceof IntegerLiteral);
        const leftValue = left.value;
        assert.ok(right instanceof IntegerLiteral);
        const rightValue = right.value;
        return new IntegerLiteral(Number(leftValue + rightValue).toString(10));
    }

}
export const BINARY_CONSTIFIERS = new BinaryConstifiers();
