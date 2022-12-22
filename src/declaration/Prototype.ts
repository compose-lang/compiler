import ParameterList from "../parameter/ParameterList";
import Identifier from "../builder/Identifier";
import FunctionType from "../type/FunctionType";
import IType from "../type/IType";

export default class Prototype extends FunctionType {

    id: Identifier;

    constructor(id: Identifier, parameters: ParameterList, returnType: IType) {
        super(parameters, returnType);
        this.id = id;
    }

}
