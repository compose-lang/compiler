import CodeFragment from "../builder/CodeFragment.ts";
import Identifier from "../builder/Identifier.ts";
import IType from "../type/IType.ts";
import {equalObjects} from "../utils/ObjectUtils.ts";

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

    equals(other: any) {
        return this == other || (other instanceof GenericParameter && this.equalsGenericParameter(other));
    }

    equalsGenericParameter(other: GenericParameter) {
        return this.id.equals(other.id) && equalObjects(this.constraint, other.constraint, (a, b) => a.typeName == b.typeName);
    }

}
