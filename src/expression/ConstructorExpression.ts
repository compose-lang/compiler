import ExpressionBase from "./ExpressionBase.ts";
import IExpression from "./IExpression.ts";
import Identifier from "../builder/Identifier.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import ClassType from "../type/ClassType.ts";
import WasmModule from "../module/WasmModule.ts";

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
        const klass = context.getRegisteredClass(this.id);
        klass.declare(context, module);
        this.args.forEach(arg => arg.declare(context, module));
    }

}
