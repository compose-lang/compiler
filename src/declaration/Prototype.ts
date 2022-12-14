import ParameterList from "../parameter/ParameterList";
import Identifier from "../builder/Identifier";
import TypeList from "../type/TypeList";
import FunctionType from "../type/FunctionType";

export default class Prototype extends FunctionType {

    id: Identifier;

    constructor(id: Identifier, parameters: ParameterList, returnTypes: TypeList) {
        super(parameters, returnTypes);
        this.id = id;
    }

}
