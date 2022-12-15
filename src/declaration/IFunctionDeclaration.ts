import IDeclaration from "./IDeclaration";
import ParameterList from "../parameter/ParameterList";
import TypeList from "../type/TypeList";
import FunctionType from "../type/FunctionType";

export default interface IFunctionDeclaration extends IDeclaration {
    parameters: ParameterList;
    returnTypes: TypeList;

    type(): FunctionType;
}
