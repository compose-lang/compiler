import CodeFragment from "../builder/CodeFragment.ts";
import IParameter from "./IParameter.ts";
import Identifier from "../builder/Identifier.ts";
import FunctionType from "../type/FunctionType.ts";
import ILiteralExpression from "../literal/ILiteralExpression.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";

export default class FunctionParameter extends CodeFragment implements IParameter {

    id: Identifier;
    type: FunctionType;
    defaultValue: ILiteralExpression;

    constructor(id: Identifier, type: FunctionType, defaultValue: ILiteralExpression = null) {
        super();
        this.id = id;
        this.type = type;
        this.defaultValue = defaultValue;
    }

    equals(other: any): boolean {
        return this == other || (other instanceof FunctionParameter && this.equalsFunctionParameter(other));
    }

    equalsFunctionParameter(other: FunctionParameter) {
        return this.id.equals(other.id) && this.type.equals(other.type);
    }

    get name(): string {
        return this.id.value;
    }

    withType(type: IType): IParameter {
        if(type == this.type)
            return this;
        else
            return new FunctionParameter(this.id, type as FunctionType, this.defaultValue);
    }

    toString() {
        return this.id.value + ": " + this.type.toString();
    }

    register(context: Context): void {
        // TODO
    }

    declare(local: Context, module: WasmModule): void {
        // TODO
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        // TODO
    }

}
