import ExpressionBase from "./ExpressionBase.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import Identifier from "../builder/Identifier.ts";
import IExpression from "./IExpression.ts";

export default class MemberExpression extends ExpressionBase {

    parent: IExpression;
    id: Identifier;

    constructor(parent: IExpression, id: Identifier) {
        super();
        this.parent = parent;
        this.id = id;
    }

    check(context: Context): IType {
        const parentType = this.parent.check(context);
        return parentType.checkMember(context, this.id);
    }

    declare(context: Context, module: WasmModule): void {
        this.parent.declare(context, module);
    }


}
