import Identifier from "../builder/Identifier.ts";
import IType from "../type/IType.ts";
import InstanceModifier from "../statement/InstanceModifier.ts";

export default class Variable {

    modifier: InstanceModifier;
    id: Identifier;
    type: IType;

    constructor(modifier: InstanceModifier, id: Identifier, type: IType) {
        this.modifier = modifier;
        this.id = id;
        this.type = type;
    }

    get name() {
        return this.id.value;
    }


}
