import CodeSection from "../builder/CodeSection";
import IType from "./IType";
import Identifier from "../builder/Identifier";

export default class ClassType extends CodeSection implements IType {

    id: Identifier;

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get typeName(): string {
        return this.id.value;
    }

}
