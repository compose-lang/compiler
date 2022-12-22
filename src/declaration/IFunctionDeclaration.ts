import IDeclaration from "./IDeclaration";
import ParameterList from "../parameter/ParameterList";
import FunctionType from "../type/FunctionType";
import IType from "../type/IType";

export default interface IFunctionDeclaration extends IDeclaration {
    parameters: ParameterList;
    returnType: IType;

    type(): FunctionType;
}
