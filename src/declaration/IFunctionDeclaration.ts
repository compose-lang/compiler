import IDeclaration from "./IDeclaration";
import ParameterList from "../parameter/ParameterList";
import FunctionType from "../type/FunctionType";
import IType from "../type/IType";
import Prototype from "./Prototype";

export default interface IFunctionDeclaration extends IDeclaration {

    parameters: ParameterList;
    returnType: IType;

    type(): FunctionType;
    prototype(): Prototype;
    isGeneric(): boolean;
    resolveGenericType(type: IType, typeArguments: IType[]): IType;
    instantiateGeneric(typeArguments: IType[]): IFunctionDeclaration;
}
