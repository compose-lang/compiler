import CodeFragment from "../builder/CodeFragment";
import IParameter from "./IParameter";
import Identifier from "../builder/Identifier";
import FunctionType from "../type/FunctionType";
import ILiteralExpression from "../literal/ILiteralExpression";
import Context from "../context/Context";
import Module from "../module/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import IType from "../type/IType";

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

    declare(local: Context, module: Module): void {
        // TODO
    }

    rehearse(context: Context, module: Module, body: FunctionBody): void {
        // TODO
    }

}
