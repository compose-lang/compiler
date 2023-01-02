import CodeFragment from "../builder/CodeFragment";
import IParameter from "./IParameter";
import Identifier from "../builder/Identifier";
import IValueType from "../type/IValueType";
import ILiteralExpression from "../literal/ILiteralExpression";
import Context from "../context/Context";
import Variable from "../context/Variable";
import InstanceModifier from "../statement/InstanceModifier";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import {equalObjects} from "../utils/ObjectUtils";

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
        body.registerLocal(this.name, this.type);
    }


    private asVariable() {
        return new Variable(InstanceModifier.LET, this.id, this.type);
    }

}
