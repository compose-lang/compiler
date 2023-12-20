import CodeFragment from "../builder/CodeFragment.ts";
import IParameter from "./IParameter.ts";
import Identifier from "../builder/Identifier.ts";
import IValueType from "../type/IValueType.ts";
import ILiteralExpression from "../literal/ILiteralExpression.ts";
import Context from "../context/Context.ts";
import Variable from "../context/Variable.ts";
import InstanceModifier from "../statement/InstanceModifier.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";

export default class TypedParameter extends CodeFragment implements IParameter {

    id: Identifier;
    type: IValueType;
    defaultValue: ILiteralExpression;

    constructor(id: Identifier, type: IValueType, defaultValue: ILiteralExpression = null) {
        super();
        this.id = id;
        this.type = type;
        this.defaultValue = defaultValue;
    }

    equals(other: any): boolean {
        return this == other || (other instanceof TypedParameter && this.equalsTypedParameter(other));
    }

    equalsTypedParameter(other: TypedParameter) {
        return this.id.equals(other.id) && this.type.typeName == other.type.typeName; // TODO check if defaultValue makes sense
    }

    get name(): string {
        return this.id.value;
    }

    withType(type: IType): IParameter {
        if(type == this.type)
            return this;
        else
            return new TypedParameter(this.id, type as IValueType, this.defaultValue);
    }

    toString() {
        return this.id.value + ": " + this.type.toString();
    }

    register(context: Context): void {
        context.registerLocal(this.asVariable());
    }

    declare(context: Context, module: WasmModule): void {
        this.register(context);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.register(context);
        body.registerParameter(this.name, this.type);
    }


    private asVariable() {
        return new Variable(InstanceModifier.LET, this.id, this.type);
    }

}
