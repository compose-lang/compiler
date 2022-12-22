import CodeFragment from "../builder/CodeFragment";
import IParameter from "./IParameter";
import Identifier from "../builder/Identifier";
import IDataType from "../type/IDataType";
import ILiteralExpression from "../literal/ILiteralExpression";
import Context from "../context/Context";
import Variable from "../context/Variable";
import InstanceModifier from "../context/InstanceModifier";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";

export default class TypedParameter extends CodeFragment implements IParameter {

    id: Identifier;
    type: IDataType;
    defaultValue: ILiteralExpression;

    constructor(id: Identifier, type: IDataType, defaultValue: ILiteralExpression = null) {
        super();
        this.id = id;
        this.type = type;
        this.defaultValue = defaultValue;
    }

    get name(): string {
        return this.id.value;
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
