import ParameterList from "../parameter/ParameterList";
import Identifier from "../builder/Identifier";
import TypeList from "../type/TypeList";
import MethodType from "../type/MethodType";

export default class Prototype extends MethodType {

    id: Identifier;

    constructor(id: Identifier, parameters: ParameterList, returnTypes: TypeList) {
        super(parameters, returnTypes);
        this.id = id;
    }

}
