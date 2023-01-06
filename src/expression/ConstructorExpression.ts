import ExpressionBase from "./ExpressionBase";
import IExpression from "./IExpression";
import Identifier from "../builder/Identifier";
import IType from "../type/IType";
import Context from "../context/Context";
import ClassType from "../type/ClassType";
import WasmModule from "../module/WasmModule";
import * as assert from "assert";

export default class ConstructorExpression extends ExpressionBase {

    id: Identifier;
    genericTypes: IType[];
    args: IExpression[];

    constructor(id: Identifier, genericTypes: IType[], args: IExpression[]) {
        super();
        this.id = id;
        this.genericTypes = genericTypes;
        this.args = args;
    }

    get name(): string {
        return this.id.value;
    }

    isGeneric() {
        return this.genericTypes.length > 0;
    }

    check(context: Context): IType {
        const klass = context.getRegisteredClass(this.id);
        return new ClassType(this.id, klass);
    }

    declare(context: Context, module: WasmModule): void {
        assert.ok(false); // TODO
    }

}
