import ExpressionBase from "./ExpressionBase";
import Identifier from "../builder/Identifier";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";

export default class InstanceExpression extends ExpressionBase {

    id: Identifier

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    declare(context: Context, module: WasmModule): void {
        // TODO
    }

}
