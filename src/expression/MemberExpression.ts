import ExpressionBase from "./ExpressionBase";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import * as assert from "assert";
import Identifier from "../builder/Identifier";
import IExpression from "./IExpression";

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
        assert.ok(false); // TODO
    }


}
