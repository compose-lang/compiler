import IDeclaration from "./IDeclaration";
import ParameterList from "../parameter/ParameterList";
import TypeList from "../type/TypeList";

export default interface IMethodDeclaration extends IDeclaration {
    parameters: ParameterList;
    returnTypes: TypeList;
}
