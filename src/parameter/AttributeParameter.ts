import IParameter from "./IParameter.ts";
import CodeFragment from "../builder/CodeFragment.ts";
import AttributeType from "../type/AttributeType.ts";
import ILiteralExpression from "../literal/ILiteralExpression.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import IValueType from "../type/IValueType.ts";
import TypedParameter from "./TypedParameter.ts";

export default class AttributeParameter extends CodeFragment implements IParameter {

    type: AttributeType;
    defaultValue: ILiteralExpression;

    constructor(type: AttributeType, defaultValue: ILiteralExpression = null) {
        super();
        this.type = type;
        this.defaultValue = defaultValue;
    }

    get name(): string {
        return this.type.typeName;
    }

    equals(other: any): boolean {
        return this == other || (other instanceof AttributeParameter && this.equalsAttributeParameter(other));
    }

    equalsAttributeParameter(other: AttributeParameter) {
        return this.type.id.equals(other.type.id);
    }

    withType(type: IType): IParameter {
        if(type == this.type)
            return this;
        else
            return new TypedParameter(this.type.id, type as IValueType, this.defaultValue);
    }

    toString() {
        return this.type.typeName;
    }

    register(context: Context): void {
        // TODO
        /*const decl = context.getRegisteredAttribute(this.type.id);
        assertTrue(decl);
        context.registerLocal(new Variable(InstanceModifier.LET, this.type.id, decl.type));*/
    }

    declare(local: Context, module: WasmModule): void {
        // TODO
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        // TODO
    }

}
