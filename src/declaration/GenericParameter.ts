import CodeFragment from "../builder/CodeFragment";
import Identifier from "../builder/Identifier";
import IType from "../type/IType";

export default class GenericParameter extends CodeFragment {

    id: Identifier;
    constraint: IType;

    constructor(id: Identifier, constraint: IType) {
        super();
        this.id = id;
        this.constraint = constraint;
    }

    get name() {
        return this.id.value;
    }


}
