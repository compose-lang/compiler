import CodeSection from "../builder/CodeSection";
import IParameter from "./IParameter";
import Identifier from "../builder/Identifier";
import MethodType from "../type/MethodType";

export default class MethodParameter extends CodeSection implements IParameter {

    id: Identifier;
    type: MethodType;

    constructor(id: Identifier, type: MethodType) {
        super();
        this.id = id;
        this.type = type;
    }

    get name(): string {
        return this.id.value;
    }
}
