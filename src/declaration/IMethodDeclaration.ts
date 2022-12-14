import IDeclaration from "./IDeclaration";
import ParameterList from "../parameter/ParameterList";
import TypeList from "../type/TypeList";
import MethodType from "../type/MethodType";

export default interface IMethodDeclaration extends IDeclaration {
    parameters: ParameterList;
    returnTypes: TypeList;

    type(): MethodType;
}
