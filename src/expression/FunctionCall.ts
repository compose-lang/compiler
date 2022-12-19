import ExpressionBase from "./ExpressionBase";
import Identifier from "../builder/Identifier";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import IExpression from "./IExpression";

export default class FunctionCall extends ExpressionBase {

    parent: IExpression = null;
    id: Identifier;

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    check(context: Context): IType {
        return undefined;
    }

    declare(context: Context, module: WasmModule): void {
    }



}
