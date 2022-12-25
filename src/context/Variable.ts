import Identifier from "../builder/Identifier";
import IType from "../type/IType";
import InstanceModifier from "../statement/InstanceModifier";

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
