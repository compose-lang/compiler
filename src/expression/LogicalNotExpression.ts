import ExpressionBase from "./ExpressionBase.ts";
import IExpression from "./IExpression.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import BooleanType from "../type/BooleanType.ts";
import WasmModule from "../module/WasmModule.ts";
import { assert } from "../../deps.ts";

export default class LogicalNotExpression extends ExpressionBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    check(context: Context): IType {
        const type = this.expression.check(context);
        assert(type == BooleanType.instance, "Not a boolean at " + this.fragment.toString());
        return BooleanType.instance;
    }

    declare(context: Context, module: WasmModule): void {
        assert(false); // TODO
    }

}
