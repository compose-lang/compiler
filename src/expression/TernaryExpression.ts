import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import BooleanType from "../type/BooleanType.ts";
import TypeMap from "../type/TypeMap.ts";
import { assertTrue } from "../../deps.ts";

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
        assertTrue(type == BooleanType.instance);
        const trueType = this.ifTrue.check(context);
        const falseType = this.ifFalse.check(context);
        const typeMap = new TypeMap();
        typeMap.add(trueType);
        typeMap.add(falseType);
        return typeMap.inferType(context);
    }

    declare(context: Context, module: WasmModule): void {
        this.condition.declare(context, module);
        this.ifTrue.declare(context, module);
        this.ifFalse.declare(context, module);
    }

}
