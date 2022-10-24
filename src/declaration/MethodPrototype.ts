import ParameterList from "../parameter/ParameterList";
import Identifier from "../builder/Identifier";
import TypeList from "../type/TypeList";
import CodeSection from "../builder/CodeSection";

export default class MethodPrototype extends CodeSection {

    id: Identifier;
    parameters: ParameterList;
    returnTypes: TypeList;

    constructor(id: Identifier, parameters: ParameterList, returnTypes: TypeList) {
        super();
        this.id = id;
        this.parameters = parameters;
        this.returnTypes = returnTypes;
    }

}
