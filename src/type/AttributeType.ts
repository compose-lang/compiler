import CodeFragment from "../builder/CodeFragment";
import IType from "./IType";
import Identifier from "../builder/Identifier";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";

export default class AttributeType extends CodeFragment implements IType {

    nullable = false;
    id: Identifier;

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get typeName(): string {
        return this.id.value;
    }

    count(): number {
        return 0; // TODO
    }

    byteLength(): number {
        return 0; // TODO
    }

    writeTo(target: IWasmTarget): void {
        // TODO
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return false; // TODO
    }

}
