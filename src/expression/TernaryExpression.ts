import ExpressionBase from "./ExpressionBase";
import assert from "assert";
import Module from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import IExpression from "./IExpression";
import BooleanType from "../type/BooleanType";
import TypeMap from "../type/TypeMap";

export default class TernaryExpression extends ExpressionBase {

    condition: IExpression;
    ifTrue: IExpression;
    ifFalse: IExpression;

    constructor(condition: IExpression, ifTrue: IExpression, ifFalse: IExpression) {
        super();
        this.condition = condition;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }


    check(context: Context): IType {
        const type = this.condition.check(context);
        assert.ok(type == BooleanType.instance);
        const trueType = this.ifTrue.check(context);
        const falseType = this.ifFalse.check(context);
        const typeMap = new TypeMap();
        typeMap.add(trueType);
        typeMap.add(falseType);
        return typeMap.inferType(context);
    }

    declare(context: Context, module: Module): void {
        this.condition.declare(context, module);
        this.ifTrue.declare(context, module);
        this.ifFalse.declare(context, module);
    }

}
