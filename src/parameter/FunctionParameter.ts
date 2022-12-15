import CodeFragment from "../builder/CodeFragment";
import IParameter from "./IParameter";
import Identifier from "../builder/Identifier";
import FunctionType from "../type/FunctionType";

export default class FunctionParameter extends CodeFragment implements IParameter {

    id: Identifier;
    type: FunctionType;

    constructor(id: Identifier, type: FunctionType) {
        super();
        this.id = id;
        this.type = type;
    }

    get name(): string {
        return this.id.value;
    }

    toString() {
        return this.id.value + ": " + this.type.toString();
    }

}
