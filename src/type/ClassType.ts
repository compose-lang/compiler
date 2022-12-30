import CodeFragment from "../builder/CodeFragment";
import IType from "./IType";
import Identifier from "../builder/Identifier";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import UserType from "./UserType";
import ClassDeclaration from "../declaration/ClassDeclaration";

export default class ClassType extends UserType {

    nullable = false;
    id: Identifier;
    klass: ClassDeclaration;

    constructor(id: Identifier, klass?: ClassDeclaration) {
        super();
        this.id = id;
        this.klass = klass;
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
