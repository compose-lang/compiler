import IType from "./IType";
import Identifier from "../builder/Identifier";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import UserType from "./UserType";

export default class AttributeType extends UserType {

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
