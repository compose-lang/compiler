import CodeFragment from "../builder/CodeFragment";
import IType from "./IType";
import Identifier from "../builder/Identifier";
import IWasmTarget from "../compiler/IWasmTarget";

export default class ClassType extends CodeFragment implements IType {

    id: Identifier;

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get typeName(): string {
        return this.id.value;
    }

    byteLength(): number {
        return 0; // TODO
    }

    writeTo(target: IWasmTarget): void {
        // TODO
    }

}
