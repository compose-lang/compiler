import ParameterList from "../parameter/ParameterList";
import TypeList from "./TypeList";
import CodeSection from "../builder/CodeSection";
import IType from "./IType";

export default class MethodType extends CodeSection implements IType {

    parameters: ParameterList;
    returnTypes: TypeList;

    constructor(parameters: ParameterList, returnTypes: TypeList) {
        super();
        this.parameters = parameters;
        this.returnTypes = returnTypes;
    }

    get typeName(): string {
        return "<method>";
    }
}
